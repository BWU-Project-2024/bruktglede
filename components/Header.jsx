export const Header = ({ title, description }) => {
    return (
        <header className="bg-ivory-default h-40 overflow-hidden lg:h-60 px-6 md:px-28 lg:px-64">
            <h1 className="font-jomhuria py-2 text-forestgreen-default text-5xl pt-5  md:text-6xl lg:pt-20 lg:text-7xl">{title}</h1>
            <p className="py-2 text-base overflow-hidden md:text-lg lg:max-w-readable">{description}</p>
        </header>
    );
};