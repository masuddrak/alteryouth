import SectionHeader from "@/components/ui/SectionHeader";
import React from "react";
import EligibleApplyCard from "./EligibleApplyCard";
import ComunityFollow from "./ComunityFollow";

const ScholarshipEligibility = () => {
  return (
    <main className="py-10 mx-4 lg:mx-0 mt-5 lg:mt-8">
      <header>
        <SectionHeader
          widControle=""
          textAlign=""
          title="Scholarship Eligibility"
          description="Only students who are currently enrolled in Government Primary Schools and fall
under any of the following criteria are eligible to apply for scholarships"
        ></SectionHeader>
      </header>
      <article>
        <div className="lg:max-w-[1000px] lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          <EligibleApplyCard
            title="Disabled Father"
            description="Student's father is physically unable
to work"
          ></EligibleApplyCard>
          <EligibleApplyCard
            title="Single Mother"
            description="Student's father is deceased or has abandoned the family"
          ></EligibleApplyCard>
          <EligibleApplyCard
            title="Orphan"
            description="Both parents are deceased or have abandoned the child"
          ></EligibleApplyCard>
        </div>
      </article>
      <article className="mt-14">
        <ComunityFollow></ComunityFollow>
      </article>
    </main>
  );
};

export default ScholarshipEligibility;
