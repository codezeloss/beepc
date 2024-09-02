import Image from "next/image";

export default function FeaturedComponents() {
    return (
        <section id="components" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <p className="inline-block rounded-lg font-medium bg-neutral-900 text-white px-3 py-1 text-xs sm:text-sm">Featured Components</p>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            High-Performance Parts for Your PC
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground text-sm md:text-lg/relaxed">
                            Upgrade your computer with the latest and greatest components. Our selection includes
                            top-of-the-line CPUs, GPUs, RAM, and more to give your system a serious boost.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <Image
                        src="/components.png"
                        alt="Featured image"
                        className="mx-auto overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
                        width={450}
                        height={210}
                        loading="lazy"
                    />

                    <div className="flex flex-col justify-center space-y-4">
                        <div className="grid gap-6">
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">High-End CPUs</h3>
                                    <p className="text-muted-foreground text-xs sm:text-sm">
                                        Unlock maximum performance with our selection of cutting-edge CPUs.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Powerful GPUs</h3>
                                    <p className="text-muted-foreground text-xs sm:text-sm">
                                        Experience stunning visuals with our top-tier graphics cards.
                                    </p>
                                </div>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">High-Speed RAM</h3>
                                    <p className="text-muted-foreground text-xs sm:text-sm">
                                        Boost your system&apos;s responsiveness with our high-performance memory.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
