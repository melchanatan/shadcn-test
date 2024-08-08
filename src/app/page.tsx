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
import { InputForm } from "@/components/input-form";
import NavDrawer from "@/components/form-drawer";

export default function Home() {
  return (
    <main className="container flex items-start justify-center h-[60dvh] flex-col">
      <div className="flex items-center space-x-2">
        <InputForm />
      </div>
    </main>
  );
}
