import SectionHeader from "@/components/ui/SectionHeader";
import school1 from "../../../public/images/school1.jpeg";
import school2 from "../../../public/images/school2.jpeg";
import school3 from "../../../public/images/school3.jpeg";
import school4 from "../../../public/images/school4.jpeg";
import school5 from "../../../public/images/school5.jpeg";
import school6 from "../../../public/images/school6.jpeg";
import school7 from "../../../public/images/school7.jpeg";
import ImpactCarousel from "@/components/carousel/ImpactCarousel";
import "./PrimarySchools.css";
const PrimarySchools = () => {
  const schoolImages = [
    school1,
    school2,
    school3,
    school4,
    school5,
    school6,
    school7,
  ];
  return (
    <main className="py-10">
      <header className="container mx-auto">
        <div className="w-full md:w-[700px] lg:w-[800px] px-4 md:px-0">
          <SectionHeader
            widControle={"container"}
            textAlign={"left"}
            title="Students from Government Primary Schools
"
            description="Government primary schools play a crucial role in providing foundational education to millions of children across the country. These schools often cater to diverse student populations, reflecting the cultural, linguistic, and socioeconomic diversity of the nation. For many students, these institutions are their first formal step into the world of education."
          ></SectionHeader>
        </div>
      </header>
      <article className="schoolSlider">
        <ImpactCarousel
          schoolImages={schoolImages}
          slider={"schoolSlider"}
        ></ImpactCarousel>
      </article>
    </main>
  );
};

export default PrimarySchools;
