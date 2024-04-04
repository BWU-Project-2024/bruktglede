export const CategoryTag = ({ children, bgColor = "" }) => {
    return (
        <span
            role="tag"
            aria-label="Store Name"
            className={`bg-${bgColor} p-1 px-4 rounded-2xl mx-1 text-xs md:text-base bg-ivory-darker lg:px-5 lg:p-1.5`}
        >
            {children}
        </span>
    );
};
