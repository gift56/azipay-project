import {
  Easypay,
  FreeForever,
  GetExclusive,
  HeroSection,
  Individual,
} from "@/components";
import MainLayout from "@/layouts/MainLayout";

const Homepage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Individual />
      <Easypay />
      <FreeForever />
      <GetExclusive />
    </MainLayout>
  );
};

export default Homepage;
