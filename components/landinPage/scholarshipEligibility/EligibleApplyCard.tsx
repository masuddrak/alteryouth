import React from "react";
import { BsPersonStandingDress } from "react-icons/bs";
import { MdOutlineFamilyRestroom } from "react-icons/md";

interface EligibleApplyCardProps {
  title: string;
  description: string;
}
const EligibleApplyCard: React.FC<EligibleApplyCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex items-center gap-4  p-4 shadow-lg rounded-md">
      <div className="flex -space-x-1 text-baseBg text-lg">
        <div className="-space-x-2 flex">
          <BsPersonStandingDress
            className={`${title === "Single Mother" && "hidden"} ${
              title === "Disabled Father" && "hidden"
            } `}
          ></BsPersonStandingDress>
          <BsPersonStandingDress
            className={`${title === "Single Mother" && "hidden"} `}
          ></BsPersonStandingDress>
        </div>
        <MdOutlineFamilyRestroom
          className={`${title === "Orphan" && "hidden"} `}
        ></MdOutlineFamilyRestroom>
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default EligibleApplyCard;
