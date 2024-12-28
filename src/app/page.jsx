import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-[80px] font-bold">Creative Thoughts Agency.</h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, expedita
          tempore! Cum cumque recusandae amet!
        </p>
        <div className="flex gap-5">
          <button className="button bg-nice-blue">Learn More</button>
          <button className="button bg-white-soft text-neutral-900">
            Contact
          </button>
        </div>
        <div className="relative w-[500px] h-[50px] grayscale">
          <Image
            className="max-md:hidden"
            src="/brands.png"
            alt="brands"
            fill
          />
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          className="object-contain max-md:hidden"
          src="/hero.gif"
          alt="hero image"
          fill
        />
      </div>
    </div>
  );
};

export default Home;
