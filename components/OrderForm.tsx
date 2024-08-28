"use client"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {z} from "zod"
import {useToast} from "@/components/ui/use-toast";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

const FormSchema = z.object({
    selectedCPU: z.string(),
    selectedCPUQty: z.number().default(0),
    selectedGPU: z.string(),
    selectedGPUQty: z.number().default(0),
    selectedRAM: z.string(),
    selectedRAMQty: z.number().default(0),
    selectedStorage: z.string(),
    selectedStorageQty: z.number().default(0),
    selectedMB: z.string(),
    selectedMBQty: z.number().default(0),
    selectedPS: z.string(),
    selectedPSQty: z.number().default(0),
    email: z.string().email(),
    phone: z.string(),
    shippingAddress: z.string().email(),
})

export default function OrderForm() {
    const {toast} = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "Order placed successfully",
            description: "You will get a confirmation email in the following days once the order is approved.",
        })
    }

    return (
        <section id="order-form" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="space-y-4 text-center">
                    <div
                        className="inline-block rounded-lg text-white bg-blue-500 font-medium px-3 py-1 text-sm">Order
                        Form
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Build Your Dream PC</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed text-center mx-auto">
                        Select the components you need and we&apos;ll help you put together the perfect PC.
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-2xl space-y-6 py-8">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="selectedCPU"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">CPU</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select CPU"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="intel-i9">Intel Core i9</SelectItem>
                                                <SelectItem value="amd-ryzen-9">AMD Ryzen 9</SelectItem>
                                                <SelectItem value="intel-i7">Intel Core i7</SelectItem>
                                                <SelectItem value="amd-ryzen-7">AMD Ryzen 7</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="selectedCPUQty"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-medium">Quantity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="0" type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="selectedGPU"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">GPU</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select GPU"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="nvidia-rtx-3090">NVIDIA RTX 3090</SelectItem>
                                                <SelectItem value="nvidia-rtx-3080">NVIDIA RTX 3080</SelectItem>
                                                <SelectItem value="amd-rx-6800-xt">AMD RX 6800 XT</SelectItem>
                                                <SelectItem value="nvidia-rtx-3070">NVIDIA RTX 3070</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="selectedGPUQty"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-medium">Quantity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="0" type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="selectedRAM"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">RAM</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select RAM"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="32gb-ddr4">32GB DDR4</SelectItem>
                                                <SelectItem value="16gb-ddr4">16GB DDR4</SelectItem>
                                                <SelectItem value="8gb-ddr4">8GB DDR4</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="selectedRAMQty"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-medium">Quantity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="0" type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="selectedStorage"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">Storage </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Storage"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="option-1">Samsung 970 EVO Plus 1TB NVMe SSD</SelectItem>
                                                <SelectItem value="option-2">Crucial MX500 2TB SATA SSD</SelectItem>
                                                <SelectItem value="option-3">Western Digital Blue 4TB HDD</SelectItem>
                                                <SelectItem value="option-4">Seagate Barracuda 2TB HDD</SelectItem>
                                                <SelectItem value="option-5">Kingston A2000 500GB NVMe SSD</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="selectedStorageQty"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-medium">Quantity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="0" type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="selectedMB"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">MB</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select MB"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="option-1">ASUS ROG Strix B550-F Gaming (WiFi) (AMD AM4)</SelectItem>
                                                <SelectItem value="option-2">MSI MPG Z490 Gaming Edge WiFi (Intel LGA 1200)</SelectItem>
                                                <SelectItem value="option-3">Gigabyte B450 AORUS PRO WiFi (AMD AM4)</SelectItem>
                                                <SelectItem value="option-4">ASRock B660M Steel Legend (Intel LGA 1700)</SelectItem>
                                                <SelectItem value="option-5">ASUS TUF Gaming X570-Plus (WiFi) (AMD AM4)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="selectedMBQty"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-medium">Quantity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="0" type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="selectedPS"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold">PS</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select PS"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="option-1">Corsair RM750x 750W 80+ Gold Fully Modular</SelectItem>
                                                <SelectItem value="option-2">EVGA SuperNOVA 650 G5 650W 80+ Gold Fully Modular</SelectItem>
                                                <SelectItem value="option-3">FOCUS GX-550 550W 80+ Gold Fully Modular</SelectItem>
                                                <SelectItem value="option-4">Straight Power 11 850W 80+ Gold Fully Modular</SelectItem>
                                                <SelectItem value="option-5">GF1 750W 80+ Gold Fully Modular</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="selectedPSQty"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-medium">Quantity</FormLabel>
                                        <FormControl>
                                            <Input placeholder="0" type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button type="submit">Place Order</Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}
