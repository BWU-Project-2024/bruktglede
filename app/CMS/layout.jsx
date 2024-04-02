
import { CMSNavbar } from "@/components/CMSComponents/CMSNavbar";


export default async function Layout({ children }) {
    return (
        <section>
            <CMSNavbar />
            {children}
        </section>
    );
}