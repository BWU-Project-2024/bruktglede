export const H2Section = ({ heading, paragraph }) => {
    return (

        <div className="mb-10">
        <h2 className="text-lg lg:text-2xl font-medium font-opensans mb-2">{heading}</h2>
        <p className="text-base font-opensans lg:text-lg">{paragraph}</p>
        </div>



    );
};
