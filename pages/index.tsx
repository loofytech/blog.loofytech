import Image from "next/image";
import { appContext } from "@/context/AppContext";

export default function Home() {
  const {categories} = appContext();

  const handleCategory = (slug: string) => {
    console.log(slug)
  }

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
      <div className="mt-16">
        <h3 className="text-center text-3xl font-bold">Categories</h3>
        <div className="grid grid-cols-2 gap-5 mt-8">
          {categories && categories.map((_: any, i: number) => {
            return <div key={i} className="category h-48 rounded-2xl overflow-hidden cursor-pointer" onClick={() => handleCategory(_.slug)}>
              <div className="flex h-full items-center px-10" style={{background: `linear-gradient(359.72deg, rgba(72, 43, 231, 0.73) 0.25%, rgba(0, 0, 0, 0.23) 99.77%), url(${_.image})`}}>
                <span className="text-3xl font-bold text-white">{_.name}</span>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
    <hr className="mx-auto lg:mx-56" />
    <div className="relative mx-auto lg:mx-56 lg:my-10">
      asd
    </div>
  </>;
}
