import Contact from "./Contact";

const today = new Date();

const FooterSection = () => {
  return (
    <footer className="bg-secondary w-full bg-lavender p-5  relative bottom-0 border-5 border-t-black">
      <Contact />
      <div className="flex justify-between">
        <span>Generations-Backflow</span>
        <span className=" text-black">
          Copyright &copy; {today.getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
