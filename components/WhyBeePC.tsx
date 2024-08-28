export default function WhyBeePc() {
    return (
        <section id="why" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Choose BeePC?</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Top-Tier Components, Unbeatable Service
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed text-center mx-auto">
                        When you shop with us, you can trust that you&apos;re getting the best computer components on the
                        market, backed by our exceptional customer support.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Unparalleled Quality</h3>
                                    <p className="text-muted-foreground text-sm">
                                        We only source the highest-quality components from trusted manufacturers.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Expert Guidance</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Our knowledgeable team is here to help you find the perfect parts for your
                                        build.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">Reliable Support</h3>
                                    <p className="text-muted-foreground text-sm">
                                        If you ever have any issues, our dedicated support team is ready to assist you.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/placeholder.svg"
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        width="550"
                        height="310"
                    />
                </div>
            </div>
        </section>
    );
}
