export const CategoryTag = ({ title, bgColor = "ivory-darker" }) => {
    return (
       <span role="tag" aria-label="Store Name" className={`bg-${bgColor} stroke-forestgreen-default p-1 px-4 rounded-2xl mx-1 text-xs md:text-base`}>{title}
    
    
        {/* ivory-darker er default bakgrunnsfarge, for å endre bakgrunnsfarge på taggen legg inn fargen du vil ha som en prop når du bruker componenten*/}
       
       </span>


       
    );
};