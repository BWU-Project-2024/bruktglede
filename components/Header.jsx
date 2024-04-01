export const Header = ({ title, description }) => {
    return (
        <header className="bg-ivory-default h-40 mb-5 overflow-hidden lg:h-60"> 
            <h1 className="font-jomhuria text-forestgreen-default text-5xl pt-5 p-2 px-6 md:text-6xl md:px-20 lg:px-40 lg:pt-20 lg:text-7xl">{title}</h1>
            <p className=" p-2 px-6 text-base overflow-hidden md:text-lg md:px-20 lg:px-40">{description}</p>

            
        </header>
        
    );
};