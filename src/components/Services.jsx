import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from './Service';


const Services=()=>{
    AOS.init({
        easing:'ease-out-quart',
        delay:0,
        duration:750,
    })
    return(
        <div  id="Services" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"> Services </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
               
            </div>
            <>
            <Service />
            </>

        </div>

    )
}

export default Services; 