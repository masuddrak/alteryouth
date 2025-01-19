import React from "react";
import ComunityFollowCard from "./ComunityFollowCard";
import image1 from "../../../public/images/headteacher.jpg";
import image2 from "../../../public/images/person.jpg";
import image3 from "../../../public/images/applicant.jpg";
const ComunityFollow = () => {
  return (
    <div className="w-full lg:max-w-[1000px] lg:mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ComunityFollowCard
        title="Are you a teacher? Get your students listed on the  platform."
        navigetLink="Download the school app"
        image={image1}
      ></ComunityFollowCard>
      <ComunityFollowCard
        title="You can be  anywhere  in the world"
        navigetLink="See all scholarships"
        image={image2}
      ></ComunityFollowCard>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 w-full md:w-1/2 lg:w-full mx-auto">
        <div>
          <ComunityFollowCard
            title="While students get closer to their dreams"
            navigetLink="See all graduates"
            image={image3}
          ></ComunityFollowCard>
        </div>
      </div>
    </div>
  );
};

export default ComunityFollow;
