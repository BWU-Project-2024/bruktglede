import Link from "next/link"

export const Button = ({ title, link }) => {
    return (
        <Link href={link}>
            <button className="w-full md:w-auto bg-forestgreen-default text-ivory-default px-24 rounded py-2 font-medium drop-shadow hover:bg-ivory-darker hover:text-forestgreen-darker transition duration-200">
                {title}
            </button>
        </Link >
    )
}