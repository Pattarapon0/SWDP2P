"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import createCampGround  from "@/lib/createCampGround";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image"




const formSchema = z.object({
  name: z.string().min(1, {
    message: "camp ground name must be at least 1 characters.",
  }).max(50, {
    message: "camp ground name must be less than 50 characters.",
  }).trim(),
  address: z.string().min(1, {
    message: "Address must be at least 1 characters.",
  }).trim(),
    district: z.string().min(1, {
        message: "District must be at least 1 characters.",
    }).trim(),
    province: z.string().min(1, {
        message: "Province must be at least 1 characters.",
    }).trim(),
    postalCode: z.string().min(1, {
        message: "Postal Code must be at least 1 characters.",
    }).trim(),
    tel: z.string().min(1, {
        message: "Tel must be at least 1 characters.",
    }).trim(),
    picture: z.string().min(1, {
        message: "Picture must be at least 1 characters.",
    }).trim().url({message: "Picture must be a valid URL."}),
})
interface CampGroundCardProps {
    _id: string;
    name: string;
    address: string;
    district: string;
    province: string;
    postalCode: string;
    tel: string;
    picture: string;
  }
export default function CampgroundForm({item,hadleSubmit} : {item?:CampGroundCardProps,hadleSubmit:any}) {
    const router = useRouter();
    const session = useSession();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: item?.name ?? "",
          address: item?.address ?? "",
          district: item?.district ?? "",
          province: item?.province ?? "",
          postalCode: item?.postalCode ?? "",
          tel: item?.tel ?? "",
          picture: item?.picture ?? "",
        },
      })
      async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await hadleSubmit(
        item?._id,
        values.name,
        values.address,
        values.district,
        values.province,
        values.postalCode,
        values.tel,
        values.picture,
        session?.data?.user.token ?? ''
      );
      router.push("/campground");
    } catch (error) {
      console.error("Error creating campground:", error);
    }
      }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Camp ground name</FormLabel>
                            <FormControl>
                                <Input placeholder="Camp ground name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="Address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>District</FormLabel>
                            <FormControl>
                                <Input placeholder="District" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Province</FormLabel>
                            <FormControl>
                                <Input placeholder="Province" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                                <Input placeholder="Postal Code" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                <FormField
                    control={form.control}
                    name="tel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Telephone</FormLabel>
                            <FormControl>
                                <Input placeholder="Telephone" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                <FormField
                    control={form.control}
                    name="picture"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Picture</FormLabel>
                            <FormControl>
                                <Input placeholder="Picture" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                 {form.watch("picture") && <Image src={form.watch("picture")} alt="Picture of the author" placeholder='empty' width={500} height={500} />}
                 <div className="flex space-x-2"> 
                    <Button type="submit" >Submit</Button>
                    <Button type="button" onClick={() => router.push("/campground")}>Cancel</Button>
                </div>  
                </form>
        </Form>
    )

}