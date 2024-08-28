import Image from "next/image";

export default function FeaturedComponents() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Components</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">High-Performance Parts for Your
                            PC</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
                            Upgrade your computer with the latest and greatest components. Our selection includes
                            top-of-the-line CPUs, GPUs, RAM, and more to give your system a serious boost.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <Image
                        src="/placeholder.svg"
                        alt="Featured image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        width={550}
                        height={310}
                        loading="lazy"
                    />

                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">High-End CPUs</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Unlock maximum performance with our selection of cutting-edge CPUs.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Powerful GPUs</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Experience stunning visuals with our top-tier graphics cards.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">High-Speed RAM</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Boost your system&apos;s responsiveness with our high-performance memory.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
