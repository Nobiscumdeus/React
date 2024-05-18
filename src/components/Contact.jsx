import AOS from 'aos';
import 'aos/dist/aos.css';

import ContactForm from './GoogleForm';

const Contact=()=>{
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
    return(
        <>
       

        
        <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-15 leading-normal uppercase text-fuchsia-500"> Contact me </h1>
           
            

        </div>
       
       <ContactForm />
        </>


    )
}

export default Contact;