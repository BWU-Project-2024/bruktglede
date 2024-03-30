import { SearchBar } from "./SearchBar";

export const LandingHeader = () => {
    return (
        <header className="bg-ivory-default h-fit mb-10 pb-2 overflow-hidden">
            <h1 className="font-opensans text-forestgreen-default text-3xl pt-36 p-2 px-6   md:text-4xl lg:px-40 lg:pt-20 lg:text-5xl">Velkommen til <span className="font-jomhuria text-7xl lg:text-8xl">Bruktglede</span></h1>

            <div className="lg:hidden md:hidden px-6">
                <img src="/LandingImage.svg" alt="Logo" className="" />
            </div>

            <div className="flex flex-col max-w-md md:max-w-none md:flex-row md:items-center md:justify-between lg:px-40">
                <div className="flex flex-col justify-center md:w-1/2"> 
                    <p className="font-opensans py-6 px-6 text-base overflow-hidden md:text-lg  lg:px-0">Har du lyst til å se utvalget Gjøvik har å by på når det kommer til gjenbruk? Begynn å utforsk mulighetene!</p>
                    <h2 className="px-6 font-opensans text-base font-semibold  lg:px-0">Start eventyret med et enkelt søk</h2>
                    
                    <SearchBar />
                    
                </div>

                

                <div className="hidden md:block lg:block"> 
                    <img src="/LandingImage.svg" alt="Logo" className="lg:h-60" />
                </div>
            </div>
        </header>
    );
};