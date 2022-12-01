import {
  EnvelopeOpenIcon,
  BeakerIcon,
  InformationCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import supportImage from "../assets/tech-support.jpeg";

const Support = () => {
  return (
    <div name="support" className="w-full text-purple-1">
      <img
        className="w-screen absolute opacity-50"
        src={supportImage}
        alt="support"
      />
      <div className="relative px-2 text-center">
        <h2 className="text-4xl md:text-6xl font-bold py-8">Support</h2>
        <p className="text-lg md:text-2xl text-purple-2">
          We at Weasley & Weasley are committed to giving you the best services
          and user experience. We will be here to support you in all ways
          possible. Got any queries or problems with our products? Reach out to
          us, and we will surely be able to solve your issues in a jiffy.
        </p>
      </div>
      <div className="relative w-full flex flex-col gap-12 md:max-w-[50%] my-8 md:my-32 mx-auto text-justify">
        <div className="bg-purple-100 mx-2 rounded-xl shadow-xl px-4 py-3">
          <EnvelopeOpenIcon className="w-14 bg-purple-1 text-orange-1 px-3 py-3 rounded-xl mb-4" />
          <h4 className="font-bold text-xl mb-2">Owl Order Service</h4>
          <p>
            You can place an order with us via the owl, and we'll make sure your
            order reaches you safely on your doorstep.
          </p>
          <div className="flex gap-4 mt-8 py-2 bg-purple-1 text-orange-1 rounded-xl px-4 cursor-pointer">
            <p>Contact Us</p>
            <ArrowRightIcon className="w-4 hover:transition-all infinite ease delay-700 hover:translate-x-6" />
          </div>
        </div>
        <div className="bg-purple-100 mx-2 rounded-xl shadow-xl px-4 py-3">
          <BeakerIcon className="w-14 bg-purple-1 text-orange-1 px-3 py-3 rounded-xl mb-4" />
          <h4 className="font-bold text-xl mb-2">Order Disguise Service</h4>
          <p>
            Want to sneak our potions into Hogwarts, but they are banned? Not to
            worry, we will disguise them into perfumes and cough potions.
          </p>
          <div className="flex gap-4 mt-8 py-2 bg-purple-1 text-orange-1 rounded-xl px-4 cursor-pointer">
            <p>Contact Us</p>
            <ArrowRightIcon className="w-4 hover:transition-all infinite ease delay-700 hover:translate-x-6" />
          </div>
        </div>
        <div className="bg-purple-100 mx-2 rounded-xl shadow-xl px-4 py-3">
          <InformationCircleIcon className="w-14 bg-purple-1 text-orange-1 px-3 py-3 rounded-xl mb-4" />
          <h4 className="font-bold text-xl mb-2">Enquiry Service</h4>
          <p>
            Got any queries about our products? Got complaints? Or want to give
            praise? Feel free to contact us.
          </p>
          <div className="flex gap-4 mt-8 py-2 bg-purple-1 text-orange-1 rounded-xl px-4 cursor-pointer">
            <p>Contact Us</p>
            <ArrowRightIcon className="w-4 hover:transition-all infinite ease delay-700 hover:translate-x-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;
