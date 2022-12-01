const Offers = () => {
  return (
    <div name="offers" className="w-full my-32 mx-auto text-purple-1">
      <div className=" text-center mx-4">
        <h2 className="text-4xl md:text-6xl font-bold">Manager's Special</h2>
        <p className="text-md md:text-xl py-6 text-purple-2">
          Get hold of these extraordinary deals curated by yours truly.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-3 mx-3 text-center">
        <div className="bg-purple-200 py-3 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold uppercase">Decoy Detonators</h1>
          <p className="text-sm text-red-1">
            Buy One, get a screeming yo-yo for a bit less that you expected
          </p>
        </div>
        <div className="bg-purple-200 py-3 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold uppercase">Nose-Biting Teacup</h1>
          <p className="text-sm text-red-1">
            Tea-Party special! 4 for 3! Cheeky teas - Guranteed to tease
          </p>
        </div>
        <div className="bg-purple-200 py-3 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold uppercase">Self-Writing Quills</h1>
          <p className="text-sm text-red-1">
            Free with every purchase today - The Novel Cyrillic Model
          </p>
        </div>
        <div className="bg-purple-200 py-3 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold uppercase">Jinx-Off!</h1>
          <p className="text-sm text-red-1">
            Relax in total protection - Full kit - 4 galleons, 16 sickles, 28
            knuts
          </p>
        </div>
      </div>
    </div>
  );
};
export default Offers;
