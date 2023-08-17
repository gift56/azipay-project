import { Easypay, FreeForever, HeroSection, Individual } from "@/components";
import MainLayout from "@/layouts/MainLayout";

const Homepage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Individual />
      <Easypay />
      <FreeForever />
    </MainLayout>
  );
};

export default Homepage;
