import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {ThemeProvider} from "@/components/ThemeProvider";

const poppins = Poppins({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});

export const metadata: Metadata = {
    title: "BeePC | Top-Tier PC Components",
    description: "Find the perfect computer components to build your dream machine. Browse our selection of high-performance CPUs, GPUs, RAM, and more.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
        >
            <body className={poppins.className}>
            <Header/>
                {children}
            <Footer/>
            </body>
        </ThemeProvider>
        </html>
    );
}
