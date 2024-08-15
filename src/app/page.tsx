import { StoreDetails } from "@/components/store-details";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-screen-sm flex items-start justify-center h-dvh flex-col ">
      <Image
        src="/placeholder.jpg"
        alt="restuarant image"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="absolute py-20 w-full bottom-0 z-10 bg-gradient-to-t from-black to-transparent">
        <StoreDetails className="px-6" />
      </div>
    </main>
  );
}
