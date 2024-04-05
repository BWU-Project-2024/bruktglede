import Image from "next/image";

export const ButikkVisjon = ({ image, store }) => {
    return (
        <div className="relative">
            <div className="relative">
                <Image src={image} alt="Image of the store" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[110px] h-[110px] aspect-square rounded-full bg-white flex justify-center items-center">
                    {store}
                </div>
            </div>
        </div>
    );
};
