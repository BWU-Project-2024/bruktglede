export const Header = ({ title, description }) => {
    return (
        <header className="bg-ivory-default h-28 mb-5"> 
            <h1 className="font-jomhuria text-5xl text-forestgreen-default p-2">{title}</h1>
            <p className="px-2 text-base">{description}</p>
        </header>
        
    );
};