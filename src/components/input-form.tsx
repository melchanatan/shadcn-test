"use client"
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/button-loading";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { userPostSchema } from "@/lib/validation/user";
import { stringify } from "querystring";
import { parseSonnerError } from "@/lib/utils";
import NavDrawer from '@/components/form-delete-drawer';
import FormDrawer from "@/components/form-delete-drawer";
import FormDeleteDrawer from "@/components/form-delete-drawer";

export const InputForm = () => {
  const form = useForm<z.infer<typeof userPostSchema>>({
    resolver: zodResolver(userPostSchema),
  });

  function onSubmitSonnerLoader(data: z.infer<typeof userPostSchema>) {
    const response = fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    toast.promise(response, {
      loading: 'Loading...',
      success: (data: Response) => {
        return `${data.status} successfully create user`;
      },
      error: (error: string) => {
        const errorStatus: number = parseSonnerError(error)
        if (errorStatus === 409) return 'username already taken'

        return `${errorStatus} Something went wrong :(`
      }
    })
  }

  async function onSubmitButtonLoader(data: z.infer<typeof userPostSchema>) {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response?.ok) {
      if (response.status === 409) return toast.warning('username already taken')

      return toast.warning('Something went wrong :(', {
        description: 'please try again later.',
      });
    }

    return toast.success('Successfully update value');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitSonnerLoader)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="melchs_" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>

              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <div className="gap-4 flex">
          {
            form.formState.isSubmitting ?
              <ButtonLoading /> :
              <Button type="submit">Submit</Button>
          }
          <FormDeleteDrawer />
        </div>
      </form>
    </Form>
  );
};
