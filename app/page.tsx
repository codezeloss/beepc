import Hero from "@/components/Hero";
import FeaturedComponents from "@/components/FeaturedComponents";
import OrderForm from "@/components/OrderForm";
import WhyBeePc from "@/components/WhyBeePC";

export default function Home() {
    return (
            <div className="">
                <Hero/>
                <FeaturedComponents/>
                <OrderForm/>
                <WhyBeePc />
            </div>
    );
}
