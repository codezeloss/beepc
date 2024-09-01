import Hero from "@/components/Hero";
import FeaturedComponents from "@/components/FeaturedComponents";
import OrderForm from "@/components/OrderForm";
import WhyBeePc from "@/components/WhyBeePC";

export default function Home() {
    return (
            <main className="w-full h-full bg-white dark:bg-neutral-900 scroll-smooth">
                <Hero/>
                <FeaturedComponents/>
                <OrderForm/>
                <WhyBeePc />
            </main>
    );
}
