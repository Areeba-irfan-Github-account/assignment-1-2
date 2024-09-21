import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <h1 className="flex justify-center items-center m-9 p-25 text-4xl font-bold"> Hello I'm a Areeba  <span className="text-teal-400"> Irfan</span></h1>
    <p className="flex justify-center items-center m-0 p-25 text-2xl ">Welcome to my website</p>

    </>
  );
}
