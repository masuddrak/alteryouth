// import Image from "next/image";

import { Banner } from "@/components/header/banner/Banner";
import Scholarships from "@/components/Scholarships/Scholarships";

export default function Home() {
  return (
    <>
      <div>
        <Banner></Banner>
        <div className="mx-4 md:mx-0">

          <Scholarships></Scholarships>
        </div>
      </div>
    </>
  );
}
