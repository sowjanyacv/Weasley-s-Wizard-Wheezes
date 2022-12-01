import {
  FaceSmileIcon,
  FireIcon,
  UserIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import bgImg from "../assets/www.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex flex-col justify-between bg-purple-100 py-4  text-purple-1"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] mt-10">
        <div className="flex flex-col justify-center w-full px-2 pt-8  text-center">
          <h1 className="py-3 text-4xl md:text-6xl font-bold">
            THE SKIVING SNACKBOX
          </h1>
          <p className="text-2xl">Range of Sweets to make you ill!</p>
          <button className="w-full sm:w-[60%] self-center mt-4">
            Get Started
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div className="absolute items-center flex gap-2 flex-col py-8 md:min-w-[760px] bottom-1 mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-purple-3 mb-5 rounded-2xl bg-opacity-30 shadow-xl">
          <p className="text-xl font-semibold">Some Services</p>
          <div className="flex justify-evenly pl-4 w-full">
            <p className="flex py-2 text-xs md:text-base">
              <FaceSmileIcon className="h-6 text-red-1" />
              Joke Products
            </p>
            <p className="flex py-2 text-xs md:text-base">
              <FireIcon className="h-6 text-red-1" /> Explosive Enterprises
            </p>
            <p className="flex py-2 text-xs md:text-base">
              <UserIcon className="h-6 text-red-1" /> Muggle Magic
            </p>
            <p className="flex py-2 text-xs md:text-base">
              <ShieldCheckIcon className="h-6 text-red-1" /> Defence Objects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
