const About = () => {
  return (
    <div name="about" className="w-full my-32 mx-auto text-purple-1">
      <div className=" text-center mx-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          Trusted by Ministry of Magic
        </h2>
        <p className="text-md md:text-xl py-6 text-purple-2">
          Weasleys' Wizard Wheezes products are trusted to protect the staff at
          the Ministry of Magic. Help us extend that protection to you.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-3 mx-3 text-center">
        <div className="bg-purple-200 py-3 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold">100%</h1>
          <p className="text-sm text-red-1">Satisfaction</p>
        </div>
        <div className="bg-purple-200 py-3 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold">24/7</h1>
          <p className="text-sm text-red-1">Delivery</p>
        </div>
        <div className="bg-purple-200 py-3 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold">100k</h1>
          <p className="text-sm text-red-1">Transactions</p>
        </div>
      </div>
    </div>
  );
};
export default About;
