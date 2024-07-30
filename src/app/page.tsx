"use client";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePickerForm } from "@/components/date-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";

export default function Home() {
  return (
    <main className="container flex items-center justify-center h-[60dvh]">
      {/* <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">$1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
        </Card>
      </div> */}
      <DatePickerForm />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <PhoneInput placeholder="Enter a phone number" />
        <Button type="submit">Subscribe</Button>
      </div>
    </main>
  );
}
