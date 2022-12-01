import { AiFillGithub } from "react-icons/ai";
import { GrGatsbyjs } from "react-icons/gr";

const TheFooter = () => {
  return (
    <div className="w-full mx-auto bg-purple-1 text-orange-1">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-purple-2 py-8 px-3">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Joke Products</li>
            <li className="py-1">Explosive Enterprises</li>
            <li className="py-1">Muggle Magic</li>
            <li className="py-1">Defence Objects</li>
            <li className="py-1">WonderWitch</li>
            <li className="py-1">Sweets</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Guides</li>
            <li className="py-1">Enquiries</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 md:pt-2">
          <p className="font-bold uppercase pt-4">
            Subscribe to our mail listing
          </p>
          <p>The latest news, offers and more!</p>
          <form className="mt-2">
            <input
              className="py-2 px-2 rounded-md w-[60%]"
              type="text"
              placeholder="Enter your owl address"
            />
            <button className="py-2 mx-2">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-purple-3 flex flex-col md:flex-row gap-6 p-4 items-center justify-center text-xl">
        © 2022, Sowjanya Chandra Vijaya
        <a
          href="https://github.com/sowjanyacv"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center"
        >
          <AiFillGithub /> Github
        </a>
        <a
          href="https://sowjanyaportfolio.gatsbyjs.io/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center"
        >
          <GrGatsbyjs /> Portfolio
        </a>
      </div>
    </div>
  );
};
export default TheFooter;
