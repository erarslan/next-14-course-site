import Image from "next/image";

export const metadata = {
  title: "About",
  description: "About page",
};

const AboutPage = () => {
  return (
    <div className="flex gap-[100px] mt-10">
      <div className="flex-1 flex flex-col gap-[50px]">
        <h2 className="text-nice-blue text-[25px] font-bold">About Agency</h2>
        <h1 className="text-[40px] font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          harum?
        </h1>
        <p className="text-xl font-light text-white-soft">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae
          impedit ea natus temporibus nam dolor expedita eligendi quidem
          consequuntur, aspernatur minus magnam enim commodi.
        </p>
        <div className="flex gap-6 justify-between">
          <div className="box">
            <h1 className="font-bold text-2xl">10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="box">
            <h1 className="font-bold text-2xl">20K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="box">
            <h1 className="font-bold text-2xl">30K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          className="object-contain max-md:hidden"
          src="/about.png"
          alt="about image"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
