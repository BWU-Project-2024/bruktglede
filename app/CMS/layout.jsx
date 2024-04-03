
import { CMSNavbar } from "@/components/CMSComponents/CMSNavbar";

export default async function Layout({ children }) {
    return (
        <section className="flex flex-col sm:flex-row">
            <CMSNavbar />
            {children}
        </section>
    );
}