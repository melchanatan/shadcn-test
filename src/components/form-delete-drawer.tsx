import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import React from 'react'
import { userPostIdSchema } from "@/lib/validation/user";

const FormDeleteDrawer = () => {

    async function deletePost(postId: z.infer<typeof userPostIdSchema>["id"]) {
        const response = await fetch("/api/user", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: postId
            }),
        });
        console.log(response)
    }
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Delete</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button onClick={() => deletePost(1)}>Delete</Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer >
    )
}

export default FormDeleteDrawer