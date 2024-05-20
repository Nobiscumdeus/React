import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post('/.netlify/functions/submitToGoogleSheet', Object.fromEntries(formData));

      if (response.status === 200) {
        setMessage('Message sent successfully!!!');
        setTimeout(() => {
          setMessage('');
          form.reset();
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="flex lg:flex-row flex-col gap-6">
          <input data-aos="fade-right" name="Name" className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fucshia-800 b_glow text-xl text-slate-500" placeholder="Enter your Name" type="text" />
          <input data-aos="fade-left" name="Email" className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fucshia-800 b_glow text-xl text-slate-500" placeholder="Enter your Email" type="email" />
        </div>
        <textarea data-aos="fade-up" name="Message" className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fucshia-800 b_glow text-xl text-slate-500" id="" cols="20" rows="10" placeholder="Leave your message here..."></textarea>
        <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-4" type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default FormComponent;
