// import Image from "next/image";

import ComunityImpact from "@/components/landinPage/comunityImpact/ComunityImpact";
import { Banner } from "@/components/landinPage/banner/Banner";
import ScholarshipCommunity from "@/components/landinPage/ScholarshipCommunity/ScholarshipCommunity";
import Scholarships from "@/components/landinPage/Scholarships/Scholarships";
import PrimarySchools from "@/components/landinPage/primaryschools/PrimarySchools";
import ScholarshipEligibility from "@/components/landinPage/scholarshipEligibility/ScholarshipEligibility";

export default function Home() {
  return (
    <>
      <div>
        <Banner></Banner>
        <div className="mx-4 md:mx-0">
          <Scholarships></Scholarships>
          <ScholarshipCommunity></ScholarshipCommunity>
        </div>
        <ComunityImpact></ComunityImpact>
        <PrimarySchools></PrimarySchools>
        <ScholarshipEligibility></ScholarshipEligibility>
        <PrimarySchools></PrimarySchools>
      </div>
    </>
  );
}
