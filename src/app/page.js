import Banner from "@/components/home/Banner";
import StatsSection from "@/components/home/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <Banner/>
      <StatsSection />
    </div>
  );
}
