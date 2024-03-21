export const CategoryTag = ({ title, bgColor="bg-ivory-darker"}) => {
    return (
       <span role="tag" aria-label="Store Name" className={`bg-${bgColor} stroke-forestgreen-default p-1 px-4 rounded-2xl mx-1 text-xs md:text-base bg-ivory-darker`}>{title}
    
       </span>


       
    );
};
