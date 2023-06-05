import Image from "next/image";
import { appContext } from "@/context/AppContext";
import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";

export default function Home() {
  const {categories} = appContext();
  const [posts, setPosts] = useState<any>(null);

  useEffectOnce(() => {
    fPost();
  });

  const fPost = async () => {
    const http = await fetch("/data/posts.json");
    const data = await http.json();

    if (data.status == 200) {
      setPosts(data.data);
    }
  }

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {categories && categories.map((_: any, i: number) => {
            return <div key={i} className="category rounded-xl overflow-hidden cursor-pointer" onClick={() => handleCategory(_.slug)}>
              <div className="h-full p-5" style={{background: `linear-gradient(270.72deg, rgba(72, 43, 231, 0.73) 0.25%, rgba(0, 0, 0, 0) 99.77%), rgba(15, 23, 42, 1) 1%`}}>
                <p className="text-xl font-bold text-white mb-2">{_.name}</p>
                <p className="text-sm leading-5 text-white">{_.tagline}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
    <hr className="mx-auto lg:mx-56" />
    <div className="relative mx-auto lg:mx-56 lg:my-10">
      <div className="gap-5 grid md:grid-cols-2 lg:grid-cols-3">
        {posts && posts.map((_: any, i: number) => {
          return (<div key={i} className="pt-5 pb-2 rounded-xl" style={{background: `linear-gradient(180deg, rgba(47, 24, 147, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%), url(${_.images[0]})`}}>
            <div className="px-7">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={_.user.photo}
                  width={0}
                  height={0}
                  className="w-full h-full object-cover"
                  alt="user"
                  unoptimized
                />
              </div>
              <div className="mt-5">
                <h2 className="text-white text-2xl leading-7 font-bold">{_.title}</h2>
                <p className="text-sm text-white mt-3">{_.subtitle}</p>
              </div>
            </div>
            <div className="border-t border-gray-500 mt-5 mb-2"></div>
            <div className="flex items-center px-4 gap-3">
              <div className="flex items-center">
                <Image src={"/images/love.svg"} width={48} height={48} alt="like" />
                <span className="text-white font-bold">{_.like}</span>
              </div>
              <div className="flex items-center">
                <Image src={"/images/comment.svg"} width={48} height={48} alt="like" />
                <span className="text-white font-bold">{_.comment}</span>
              </div>
              <div className="flex items-center">
                <Image src={"/images/share.svg"} width={48} height={48} alt="like" />
                <span className="text-white font-bold">{_.share}</span>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  </>;
}
