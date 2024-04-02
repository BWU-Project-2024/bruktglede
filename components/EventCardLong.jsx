import Link from "next/link";

export const EventCardLong = ({ title, description, icons }) => {
    return (
        <div className="flex flex-col rounded-xl shadow py-3 px-2 mb-14 w-1/2">
            {" "}
            <div className="flex items-center gap-14">
                <div
                    className="bg-ivory-default flex flex-col items-center justify-center"
                    style={{
                        width: "110px",
                        height: "110px",
                    }}
                >
                    <span className="font-jomhuria text-6xl/3 mb-2 pt-4">
                        24
                    </span>
                    <span className="text-2xl">JUN</span>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold text-base pb-3 underline">
                        <Link href="/">{title}</Link>
                    </h3>
                    {icons.map((Icon, index) => (
                        <div className="flex items-center gap-3" key={index}>
                            <Icon />
                            {description[index]}
                        </div>
                    ))}
                </div>
                <div
                    className=" transform bg-peach-default flex flex-col items-center justify-center"
                    style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                    }}
                >
                    <span className="text-4xl/3 font-jomhuria pt-2.5">
                        Fretex
                    </span>
                    <span className="text-4xl max-h-8 font-jomhuria">
                        Gjøvik
                    </span>
                </div>
            </div>
        </div>
    );
};
