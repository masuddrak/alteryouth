// import Image from "next/image";

import ComunityImpact from "@/components/landinPage/comunityImpact/ComunityImpact";
import { Banner } from "@/components/landinPage/banner/Banner";
import ScholarshipCommunity from "@/components/landinPage/ScholarshipCommunity/ScholarshipCommunity";
import Scholarships from "@/components/landinPage/Scholarships/Scholarships";
import PrimarySchools from "@/components/landinPage/primaryschools/PrimarySchools";
import ScholarshipEligibility from "@/components/landinPage/scholarshipEligibility/ScholarshipEligibility";
import IntroApp from "@/components/sheard/IntroApp";
import { Association } from "@/components/landinPage/association/Association ";

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
        <div className="mx-4 md:mx-0">
          <IntroApp></IntroApp>
          <Association></Association>
        </div>

        <PrimarySchools></PrimarySchools>
      </div>
    </>
  );
}
