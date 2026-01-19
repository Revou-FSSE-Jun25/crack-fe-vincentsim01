import Image from "next/image";
import Banner from "./component/banner/Banner";
import BestSelling from "./component/banner/BestSelling";
import ShortIntro from "./component/shortIntro/ShortIntro";
import ClosetIntro from "./component/closetIntro/ClosetIntro";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <Banner />
        <ShortIntro />
        <ClosetIntro />
        <BestSelling />
      </main>
    </div>
  );
}
