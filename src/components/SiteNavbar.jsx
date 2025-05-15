"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const SiteNavbar = () => {
    const currentPath = usePathname();
    const [mobileActive, setMobileActive] = useState(false);

    return (
        <div className="w-full bg-[#acacad] shadow-sm z-50 relative">

            <div className="container mx-auto">
                {/* NAVITEMS FOR DESKTOP */}
                <nav className="lg:flex items-center hidden justify-between py-4">

                    <div className="logo_container">
                        <img src="/images/Hero/logo.png" alt="logo" className="h-24" />
                    </div>

                    <div className="nav_items">
                        <ul className="lg:flex items-center gap-[30px] hidden md:text-xs md:gap-4 lg:text-sm xl:gap-[30px] xl:text-base">
                            {[
                                { href: "/", label: "Início" },
                                { href: "/team", label: "Equipe" },
                                { href: "/services", label: "Serviços" },
                                { href: "/projects", label: "Projetos" },
                                { href: "/testimonials", label: "Relatos" },
                            ].map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`${currentPath === href ? "text-brandYellow border-b border-brandYellow" : "text-black"} text-2xl p-[10px] text-center font-poppins font-medium capitalize`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* NAV FOR MOBILE */}
                <nav className="flex items-center lg:hidden justify-between py-4">

                    <div className="logo_container">
                        <img src="/images/Hero/logo.png" alt="logo" className="h-16" />
                    </div>
                    <div className="menuBtn">
                        <button className="text-brandGreen text-2xl" onClick={() => setMobileActive(!mobileActive)}>
                            {mobileActive ? <IoClose className="text-red-700" /> : <IoMenu />}
                        </button>
                    </div>
                </nav>

                {mobileActive && (
                    <ul className="bg-greenLite absolute text-lg top-[100%] w-full pt-7 pl-8 pb-16 grid grid-cols-1 gap-5 rounded-lg transition-all duration-300 shadow-md shadow-greenLite z-50">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/team", label: "Team" },
                            { href: "/services", label: "Service" },
                            { href: "/projects", label: "Projects" },
                            { href: "/testimonials", label: "Testimonials" },
                        ].map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    onClick={() => setMobileActive(false)}
                                    href={href}
                                    className={`${currentPath === href ? "text-brandGreen" : "text-black"} p-[10px] text-center font-poppins font-medium capitalize`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}

                        <li className="my-5">
                            <Link
                                href=""
                                className="font-poppins font-medium text-black py-[10px] px-6 border-brandGreen border rounded-lg hover:border-transparent hover:bg-brandGreen duration-300 hover:text-white"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="font-poppins font-medium text-white py-[10px] px-6 bg-brandGreen border border-transparent rounded-lg hover:bg-transparent hover:border-brandGreen duration-300 hover:text-black"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SiteNavbar;
