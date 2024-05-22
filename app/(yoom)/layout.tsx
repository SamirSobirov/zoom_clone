import NavigateLinks from "@/components/Navigate";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-full" >
            <header
                className="z-20 w-full py-8 px-6 bg-darkblue flex items-center justify-between relative"
            >
                <div
                    className="h-10"
                >
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width="200"
                        height="200"
                        className="h-full object-contain"
                    />
                </div>

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </header>
            <aside
                className="w-[264px] pt-[140px] px-3 fixed top-0 left-0 bottom-0 bg-darkblue z-10"
            >
                <NavigateLinks/>
            </aside>
            {children}
        </section>
    )
}