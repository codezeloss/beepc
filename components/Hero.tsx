import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <Image
                        src="/hero.png"
                        alt="Hero"
                        className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        width={600}
                        height={600}
                        loading="eager"
                    />

                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Upgrade Your PC with Top-Tier Components
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground text-sm md:text-lg">
                                Find the perfect computer components to build your dream machine. Browse our
                                selection of high-performance CPUs, GPUs, RAM, and more.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                href="#order-form"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 dark:bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Order Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
