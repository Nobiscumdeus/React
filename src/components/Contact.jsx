import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact=()=>{
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
    return(
        <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-15 leading-normal uppercase text-fuchsia-500"> Contact me </h1>
            <form action="" className="flex flex-col gap-2 lg:w-1/2">
                <div className="flex lg:flex-row flex-col gap-6" >
                    <input data-aos="fade-right" className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fucshia-800 b_glow text-xl text-slate-500" placeholder="Enter your Name" type="text" />
                    <input data-aos="fade-left"className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fucshia-800 b_glow text-xl text-slate-500" placeholder="Enter your Email" type="email" />
                </div>
                <textarea data-aos="fade-up" className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fucshia-800 b_glow text-xl text-slate-500" id="" cols="20" rows="10" name="" placeholder="Leave your message here..."> </textarea>
                <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-4" type="submit"> Submit</button>

            </form>
        </div>
    )
}

export default Contact;