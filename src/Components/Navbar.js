export default function Navbar() {
  return (
    <header
      className="flex h-screen 
                    w-[300px] bg-[#373e98] items-center font-Lato text-[white] "
    >
      <div className="flex flex-col mx-16 text-2xl">
        <a
          href="#home"
          className="my-4 link link-underline link-underline-pink drop-shadow-md"
        >
          ./home
        </a>
        <a
          href="#about"
          className="my-4 link link-underline link-underline-pink drop-shadow-md"
        >
          ./about
        </a>
        <a
          href="#contact"
          className="my-4 link link-underline link-underline-pink drop-shadow-md"
        >
          ./contact
        </a>
      </div>
    </header>
  );
}
