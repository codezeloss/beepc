"use client"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {z} from "zod"
import {useToast} from "@/components/ui/use-toast";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {BatteryCharging, CheckIcon, Cpu, Database, Dice6, MemoryStick, Microchip} from "lucide-react";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import {useRouter} from "next/navigation";

const formSchema = z.object({
    selectedCPU: z.string().optional(),
    selectedCPUQty: z.coerce.number().int().positive().default(1),
    selectedGPU: z.string().optional(),
    selectedGPUQty: z.coerce.number().int().positive().default(1),
    selectedRAM: z.string().optional(),
    selectedRAMQty: z.coerce.number().int().positive().default(1),
    selectedStorage: z.string().optional(),
    selectedStorageQty: z.coerce.number().int().positive().default(1),
    selectedMB: z.string().optional(),
    selectedMBQty: z.coerce.number().int().positive().default(1),
    selectedPS: z.string().optional(),
    selectedPSQty: z.coerce.number().int().positive().default(1),
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(1, "Phone number is required"),
    shippingAddress: z.string().min(1, "Shipping address is required"),
}).refine(
    (data) =>
        data.selectedCPU || data.selectedGPU || data.selectedRAM ||
        data.selectedStorage || data.selectedMB || data.selectedPS,
    {
        message: "At least one component must be selected",
        path: ["selectedCPU"],
    }
)

export default function OrderForm() {
    const {toast} = useToast()
    const router = useRouter()

    const [isCPUSelected, setIsCPUSelected] = useState(true)
    const [isGPUSelected, setIsGPUSelected] = useState(false)
    const [isRAMSelected, setIsRAMSelected] = useState(false)
    const [isStorageSelected, setIsStorageSelected] = useState(false)
    const [isMBSelected, setIsMBSelected] = useState(false)
    const [isPSSelected, setIsPSSelected] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            selectedCPUQty: 1,
            selectedGPUQty: 1,
            selectedRAMQty: 1,
            selectedStorageQty: 1,
            selectedMBQty: 1,
            selectedPSQty: 1,
            fullName: "",
            email: "",
            phone: "",
            shippingAddress: "",
        }
    })

   async function onSubmit(data: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            // Here we would typically send the data to the server

            form.reset();
            setIsSuccess(true)
            router.push("#order-form-top")
            setIsCPUSelected(false)
            setIsGPUSelected(false)
            setIsRAMSelected(false)
            setIsStorageSelected(false)
            setIsMBSelected(false)
            setIsPSSelected(false)
        } catch (error) {
            toast({
                title: "Error",
                description: "There was a problem submitting your order. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    const isPCComponentSelected = isCPUSelected || isGPUSelected || isRAMSelected || isStorageSelected || isMBSelected || isPSSelected
    const disabled = form.formState.isSubmitting || !form.getValues("fullName") || !form.getValues("email") || !form.getValues("phone") || !form.getValues("shippingAddress")

    return (
        <section id="order-form" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div id="order-form-top" className="space-y-4 text-center">
                    <p className="inline-block rounded-lg text-white bg-blue-500 font-medium px-3 py-1 text-xs sm:text-sm">
                        Order Form
                    </p>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Build Your Dream PC</h2>
                    <p className="max-w-[600px] text-muted-foreground text-sm md:text-lg/relaxed text-center mx-auto">
                        Select the components you need and we&apos;ll help you put together the perfect PC
                    </p>
                </div>

                {!isSuccess && <div className="mx-auto max-w-2xl my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Button
                        onClick={() => {
                            form.setValue("selectedCPU", "")
                            form.setValue("selectedCPUQty", 1)
                            setIsCPUSelected(!isCPUSelected)
                        }}
                        type="button"
                        variant={isCPUSelected ? "default" : "ghost"}
                        className="relative w-full h-48 rounded-2xl border border-slate-400 cursor-pointer hover:border-2 flex items-center justify-center"
                    >
                        <Cpu className="size-20"/>
                        <p className="text-sm md:text-base font-semibold absolute left-4 top-4">CPU</p>
                    </Button>
                    <Button
                        onClick={() => {
                            form.setValue("selectedGPU", "")
                            form.setValue("selectedGPUQty", 1)
                            setIsGPUSelected(!isGPUSelected)
                        }}
                        type="button"
                        variant={isGPUSelected ? "default" : "ghost"}
                        className="relative w-full h-48 rounded-2xl border border-slate-400 cursor-pointer hover:border-2 flex items-center justify-center"
                    >
                        <Microchip className="size-20"/>
                        <p className="text-sm md:text-base font-semibold absolute left-4 top-4">GPU</p>
                    </Button>
                    <Button
                        onClick={() => {
                            form.setValue("selectedRAM", "")
                            form.setValue("selectedRAMQty", 1)
                            setIsRAMSelected(!isRAMSelected)
                        }}
                        type="button"
                        variant={isRAMSelected ? "default" : "ghost"}
                        className="relative w-full h-48 rounded-2xl border border-slate-400 cursor-pointer hover:border-2 flex items-center justify-center"
                    >
                        <MemoryStick className="size-20"/>
                        <p className="text-sm md:text-base font-semibold absolute left-4 top-4">RAM</p>
                    </Button>
                    <Button
                        onClick={() => {
                            form.setValue("selectedStorage", "")
                            form.setValue("selectedStorageQty", 1)
                            setIsStorageSelected(!isStorageSelected)
                        }}
                        type="button"
                        variant={isStorageSelected ? "default" : "ghost"}
                        className="relative w-full h-48 rounded-2xl border border-slate-400 cursor-pointer hover:border-2 flex items-center justify-center"
                    >
                        <Database className="size-20"/>
                        <p className="text-sm md:text-base font-semibold absolute left-4 top-4">Storage</p>
                    </Button>
                    <Button
                        onClick={() => {
                            form.setValue("selectedMB", "")
                            form.setValue("selectedMBQty", 1)
                            setIsMBSelected(!isMBSelected)
                        }}
                        type="button"
                        variant={isMBSelected ? "default" : "ghost"}
                        className="relative w-full h-48 rounded-2xl border border-slate-400 cursor-pointer hover:border-2 flex items-center justify-center"
                    >
                        <Dice6 className="size-20"/>
                        <p className="text-sm md:text-base font-semibold absolute left-4 top-4">Motherboard</p>
                    </Button>
                    <Button
                        onClick={() => {
                            form.setValue("selectedPS", "")
                            form.setValue("selectedPSQty", 1)
                            setIsPSSelected(!isPSSelected)
                        }}
                        type="button"
                        variant={isPSSelected ? "default" : "ghost"}
                        className="relative w-full h-48 rounded-2xl border border-slate-400 cursor-pointer hover:border-2 flex items-center justify-center"
                    >
                        <BatteryCharging className="size-20"/>
                        <p className="text-sm md:text-base font-semibold absolute left-4 top-4">Power System</p>
                    </Button>
                </div>}

                {!isSuccess ?
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                          className={`mx-auto max-w-2xl space-y-8 md:space-y-14 py-8 mb-11`}
                    >
                        <div>
                            {isPCComponentSelected &&
                                <p className="font-semibold mb-4 uppercase">Selected Components: </p>}
                            <div className="space-y-6">
                                {isCPUSelected && <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="selectedCPU"
                                        render={({field}) => (
                                            <FormItem className="col-span-2">
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
                                                    <Input placeholder="1" type="number"  {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>}

                                {isGPUSelected && <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="selectedGPU"
                                        render={({field}) => (
                                            <FormItem className="col-span-2">
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
                                                    <Input placeholder="1" type="number" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>}

                                {isRAMSelected && <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="selectedRAM"
                                        render={({field}) => (
                                            <FormItem className="col-span-2">
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
                                                    <Input placeholder="1" type="number" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                }

                                {isStorageSelected && <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="selectedStorage"
                                        render={({field}) => (
                                            <FormItem className="col-span-2">
                                                <FormLabel className="font-semibold">Storage </FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Storage"/>
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="option-1">Samsung 970 EVO Plus 1TB NVMe
                                                            SSD</SelectItem>
                                                        <SelectItem value="option-2">Crucial MX500 2TB SATA
                                                            SSD</SelectItem>
                                                        <SelectItem value="option-3">Western Digital Blue 4TB
                                                            HDD</SelectItem>
                                                        <SelectItem value="option-4">Seagate Barracuda 2TB
                                                            HDD</SelectItem>
                                                        <SelectItem value="option-5">Kingston A2000 500GB NVMe
                                                            SSD</SelectItem>
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
                                                    <Input placeholder="1" type="number" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>}

                                {isMBSelected && <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="selectedMB"
                                        render={({field}) => (
                                            <FormItem className="col-span-2">
                                                <FormLabel className="font-semibold">Motherboard</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select MB"/>
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="option-1">ASUS ROG Strix B550-F Gaming (WiFi)
                                                            (AMD
                                                            AM4)</SelectItem>
                                                        <SelectItem value="option-2">MSI MPG Z490 Gaming Edge WiFi
                                                            (Intel LGA
                                                            1200)</SelectItem>
                                                        <SelectItem value="option-3">Gigabyte B450 AORUS PRO WiFi (AMD
                                                            AM4)</SelectItem>
                                                        <SelectItem value="option-4">ASRock B660M Steel Legend (Intel
                                                            LGA
                                                            1700)</SelectItem>
                                                        <SelectItem value="option-5">ASUS TUF Gaming X570-Plus (WiFi)
                                                            (AMD
                                                            AM4)</SelectItem>
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
                                                    <Input placeholder="1" type="number" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>}

                                {isPSSelected && <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="selectedPS"
                                        render={({field}) => (
                                            <FormItem className="col-span-2">
                                                <FormLabel className="font-semibold">Power System</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select PS"/>
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="option-1">Corsair RM750x 750W 80+ Gold Fully
                                                            Modular</SelectItem>
                                                        <SelectItem value="option-2">EVGA SuperNOVA 650 G5 650W 80+ Gold
                                                            Fully
                                                            Modular</SelectItem>
                                                        <SelectItem value="option-3">FOCUS GX-550 550W 80+ Gold Fully
                                                            Modular</SelectItem>
                                                        <SelectItem value="option-4">Straight Power 11 850W 80+ Gold
                                                            Fully
                                                            Modular</SelectItem>
                                                        <SelectItem value="option-5">GF1 750W 80+ Gold Fully
                                                            Modular</SelectItem>
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
                                                    <Input placeholder="1" type="number" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>}
                            </div>
                        </div>

                        {isPCComponentSelected && <div>
                            <p className="font-semibold mb-4 uppercase">Your information: </p>
                            <div className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Full Name" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type="email" placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Phone number" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="shippingAddress"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Shipping address"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>}

                        {isPCComponentSelected &&
                            <Button type="submit" disabled={disabled}>
                                {isSubmitting ? "Placing Order..." : "Place Order"}
                            </Button>
                        }
                    </form>
                </Form>
                :
                    <div className="mx-auto max-w-2xl w-full space-y-4 flex flex-col my-11 md:my-28 items-center justify-center">
                        <CheckIcon className="size-20 text-green-600 bg-green-100 rounded-full p-4"/>
                        <p className="font-semibold text-base">Order placed successfully!</p>
                        <p className="text-muted-foreground max-w-sm text-sm font-medium text-center">
                            You will get a confirmation email in the following days once your order is treated.
                        </p>
                        <Button type="button" variant="default" onClick={() => {
                            setIsSuccess(false)
                            router.push("#header")
                        }}>
                            Confirm
                        </Button>
                    </div>
                }
            </div>
        </section>
    );
}
