import { Switch } from "@/components/ui/switch";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
      </div>
    </main>
  );
}
