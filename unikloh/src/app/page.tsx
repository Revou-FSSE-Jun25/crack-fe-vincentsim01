import Image from "next/image";
import Banner from "./component/banner/Banner";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red font-sans text-black">

      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white sm:items-start">
        <Banner />

       UNIK LOH!
       <br></br>
       Welcome to Unikloh.
      </main>
    </div>
  );
}
