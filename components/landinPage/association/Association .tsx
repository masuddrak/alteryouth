import React from "react";
import AssociationCard from "./AssociationCard";
import SectionHeader from "@/components/ui/SectionHeader";
import associationImage1 from "../../../public/images/associationImage.png";
import associationImage2 from "../../../public/images/expo.png";

export const Association = () => {
  return (
    <main className="py-10">
      <header>
        <SectionHeader
          title="In Association With
"
          description=" Reflecting the cultural, linguistic, and socioeconomic diversity of the nation. For many students, these institutions are their first formal step into the world of education."
          textAlign=""
          widControle=""
        ></SectionHeader>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto mt-10  lg:mt-14">
        <AssociationCard
          image={associationImage1}
          title="Asia Pacific SDG Enterprise Award"
        ></AssociationCard>
        <AssociationCard image={associationImage2} title=""></AssociationCard>
        <div className="col-span-1 md:col-span-2 md:pt-4 lg:pt-0 md:border-t-[1px] lg:border-none lg:col-span-1 w-full md:w-1/2 lg:w-full mx-auto">
          <AssociationCard
            image={associationImage2}
            title="Winner of Google Business Group Stories"
          ></AssociationCard>
        </div>
      </div>
    </main>
  );
};
