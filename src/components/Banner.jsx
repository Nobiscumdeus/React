//import { AiFillGithub } from "react-icons/ai";
/*
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaLink,
} from "react-icons/fa";
 */
//import { FiTwitter } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import SlidingText from "./SlidingText";
import TabChange from "./TabChange";
//import img from "../assets/img/IMG_20230409_182824_803.png";
import img2 from "../assets/img/1715869425719.png";

const Banner = () => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <div
      data-aos="fade-down"
      className="lg:px-30 md:px-22 px-10 lg:py-0 py-20 text-center gap-5 flex flex-col justify-center items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center items-center text-white max-w-4xl w-full">
        <h1
          data-aos="fade-right"
          className="sm:text-[25px] md:text-[35px] text-[35px] font-semibold mb-8 leading-normal uppercase"
        >
          {" "}
          Welcome to{" "}
          <span className="text-fuchsia-500"> My Portfolio Site </span>
        </h1>

        <img
          data-aos="fade-up"
          src={img2}
          width={290}
          height={290}
          className="rounded-full border-2 p-1 border-fuchsia-500 img_glow mb-8"
          alt=""
        />

        <div className="w-full max-w-4xl ">
          <p data-aos="zoom-out" className="text-center mb-6">
            <>
              <SlidingText />
            </>
            <br />
          </p>
          <p data-aos="zoom-in" className="text-center max-w-4xl">
            <>
              <TabChange />
            </>
          </p>
        </div>

        <div className="flex mt-8 gap-2">
          <div className="flex  items-center justify-center">
            <div className="sm:w-5 md:max-w-md flex flex-wrap items-center justify-center space-x-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
