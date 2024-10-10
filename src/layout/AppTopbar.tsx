import Image from "next/image"
import Link from "next/link";

export const AppTopbar = () => {

    return (
        <div className="layout-topbar">
            <Link href="/" className="layout-topbar-logo">
                <Image 
                    src={"/logo.png"}
                    alt="logo" 
                    width={42}
                    height={35}
                />
                <span>INTERBONO</span>
            </Link>
        </div>
    );
}
        