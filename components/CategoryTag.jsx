export const CategoryTag = ({ title, bgColor=""}) => {
    return (
       <span role="tag" aria-label="Store Name" className={`bg-${bgColor} p-1 px-4 rounded-2xl mx-0 text-xs md:text-sm lg:px-4 lg:p-1 mr-1 bg-ivory-darker`}>{title}
    
       </span>


       
    );
};
