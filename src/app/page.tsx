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

export default function Home() {
  return (
    <main className="container">
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
    </main>
  );
}
