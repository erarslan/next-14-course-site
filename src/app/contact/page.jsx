import Image from "next/image";

export const metadata = {
  title: "Contact",
  description: "Contact page",
};

const ContactPage = () => {
  return (
    <div className="flex gap-[100px] mt-7 max-md:flex-col">
      <div className="flex-1 relative">
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <form className="flex flex-col gap-5 form">
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="E-mail Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea placeholder="Message" rows={4}></textarea>
          <button className="bg-purple-soft h-[50px] rounded-full w-[200px] self-center">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
