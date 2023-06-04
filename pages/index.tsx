import Image from "next/image";
import { appContext } from "@/context/AppContext";

export default function Home() {
  const {categories} = appContext();

  return <>
    <div className="relative hero h-600 flex items-center lg:px-36">
      <div className="w-2/4">
        <h1 className="text-6xl text-white font-bold">Startup Framework. Suit Up Your Startup</h1>
        <p className="mt-6 text-2xl text-white leading-7">We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        <div className="mt-16 flex items-center gap-5">
          <button className="bg-white h-12 px-6 rounded-full border border-white">
            <span className="text-primary font-semibold">Get Started</span>
          </button>
          <button className="bg-transparent h-12 px-6 rounded-full border">
            <span className="text-white">Learn More</span>
          </button>
        </div>
      </div>
      <div className="w-2/4"></div>
    </div>
    <div className="relative mx-auto lg:mx-56 lg:my-20">
      <div className="flex flex-col">
        <div className="w-2/3 mx-auto">
          <h2 className="text-center text-3xl font-bold mb-5">Better Landing for Your Startup</h2>
          <p className="text-gray-400 text-center">We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        </div>
      </div>
    </div>
  </>;
}
