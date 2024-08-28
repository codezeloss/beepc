"use client"

import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function OrderForm() {
    return (
        <section id="order-form" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-500 font-medium px-3 py-1 text-sm">Order Form</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Build Your Dream PC</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed text-center mx-auto">
                        Select the components you need and we&apos;ll help you put together the perfect PC.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl space-y-6 py-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="cpu">CPU</Label>
                            <Select >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select CPU"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="intel-i9">Intel Core i9</SelectItem>
                                    <SelectItem value="amd-ryzen-9">AMD Ryzen 9</SelectItem>
                                    <SelectItem value="intel-i7">Intel Core i7</SelectItem>
                                    <SelectItem value="amd-ryzen-7">AMD Ryzen 7</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input id="quantity" type="number" min="1" defaultValue="1"/>
                        </div>
                    </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="gpu">GPU</Label>
                                <Select >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select GPU"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="nvidia-rtx-3090">NVIDIA RTX 3090</SelectItem>
                                        <SelectItem value="nvidia-rtx-3080">NVIDIA RTX 3080</SelectItem>
                                        <SelectItem value="amd-rx-6800-xt">AMD RX 6800 XT</SelectItem>
                                        <SelectItem value="nvidia-rtx-3070">NVIDIA RTX 3070</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input id="quantity" type="number" min="1" defaultValue="1"/>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="ram">RAM</Label>
                                <Select >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select RAM"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="32gb-ddr4">32GB DDR4</SelectItem>
                                        <SelectItem value="16gb-ddr4">16GB DDR4</SelectItem>
                                        <SelectItem value="8gb-ddr4">8GB DDR4</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input id="quantity" type="number" min="1" defaultValue="1"/>
                            </div>
                        </div>
                        <Button type="submit" className="w-full">
                            Place Order
                        </Button>
                    </div>
                </div>
        </section>
);
}
