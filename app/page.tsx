import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-full">
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}
