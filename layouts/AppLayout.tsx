import { Roboto } from "next/font/google";
import Link from "next/link";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

interface LProps {
  children: React.ReactNode;
}

export default function AppLayout({children}: LProps) {
  return <div className={font.className}>
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-transparent px-2 py-0 fixed top-0 left-0 right-0 md:px-52" style={{zIndex: 2}}>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="flex-1 px-1 mx-0 md:mx-2 md:px-2">
            {/*  */}
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li className="mr-2">
                <Link href={"/"} className="flex justify-center h-10 hover:bg-transparent focus:bg-transparent">
                  <span className="leading-4 text-white">Get App</span>
                </Link>
              </li>
              <li className="mr-2">
                <Link href={"/"} className="flex justify-center h-10 hover:bg-transparent focus:bg-transparent">
                  <span className="leading-4 text-white">F.A.Q</span>
                </Link>
              </li>
              <li className="mr-5">
                <Link href={"/"} className="flex justify-center h-10 hover:bg-transparent focus:bg-transparent">
                  <span className="leading-4 text-white">Sign in</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="flex justify-center bg-white text-primary h-10 px-6 rounded-full text-center hover:bg-white active:text-primary focus:bg-white"
                >
                  <span className="leading-4 font-semibold">Sign up</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 h-full bg-base-200">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>;
}