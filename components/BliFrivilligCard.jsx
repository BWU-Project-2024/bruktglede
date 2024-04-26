import Link from "next/link";

export const BliFrivilligCard = () => {
  return (
    <div className="bg-ivory-default w-full md:w-[84%] lg:w-[79%] h-72 lg:h-96 flex flex-col lg:flex-row justify-center items-center md:gap-3 lg:gap-5 p-2 px-6 md:px-20 lg:px-20 mx-auto md:mb-10 lg:mb-30 lg:mt-2">
      <div className="flex flex-col justify-center items-center md:items-start">
        <h3 className="font-jomhuria text-5xl tracking-wide lg:pb-10 text-forestgreen-default">
          Vil du bli frivillig?
        </h3>
        <p className="font-opensans text-forestgreen-default text-base lg:text-lg lg:w-96">Ønsker du å hjelpe bruktmiljøet? Ved å være frivillig er du med på å gjøre en forandring. Les mer om hva det går ut på og bli frivillig i dag!  </p>
      </div>
      <Link href="/blifrivillig">
        <button className="mt-4 lg:mt-8 lg:ml-20 lg:w-60 outline  outline-1 p-2 md:p-2 px-4 font-opensans font-semibold rounded-sm outline-forestgreen-default md:px-4 md:outline-1.5 text-forestgreen-default hover:bg-forestgreen-default hover:text-ivory-default transition transition-duration-300">
          Bli frivillig!
        </button>
      </Link>
    </div>
  );
};
