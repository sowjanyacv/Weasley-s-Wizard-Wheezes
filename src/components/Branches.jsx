import WWW from "../assets/diagonalley.webp";
import Zonko from "../assets/zonko.webp";

const Branch = () => {
  return (
    <div name="branches" className="w-full mt-32 mx-auto text-purple-1">
      <div className=" text-center mx-4">
        <h1 className="my-8 text-4xl md:text-6xl font-bold">Branches</h1>
        <p className="md:text-2xl">
          Both the shops are closed on Wednesdays and Public holidays. Inquiries
          outside business hours will be handled the next day, and inquiries on
          regular holidays will be handled after Thursday.
        </p>
      </div>
      <div className="grid md:grid-cols-2 mt-20">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="absolute">
            <h4 className="text-2xl">Address:</h4>
            <p>
              93 Diagon Alley,<br></br> London, England,<br></br> Great Britain
            </p>
            <h4 className="text-2xl">Opening Time:</h4>
            <p>Weekdays: 10:00 - 19:00</p>
            <p>Weekends: 11:00 - 21:00</p>
          </div>
          <img
            className="w-full h-[450px] opacity-50 object-cover"
            src={WWW}
            alt="/"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="absolute">
            <h4 className="text-2xl">Address:</h4>
            <p>
              High Street, Hogsmeade,<br></br> Highlands, Scotland,<br></br>{" "}
              Great Britain
            </p>
            <h4 className="text-2xl">Opening Time:</h4>
            <p>Weekdays: 14:00 - 20:00</p>
            <p>Weekends: 11:00 - 21:00</p>
          </div>
          <img
            className="w-full h-[450px] opacity-50 object-cover"
            src={Zonko}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
export default Branch;
