import { Easypay, HeroSection, Individual } from "@/components";
import MainLayout from "@/layouts/MainLayout";

const Homepage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Individual />
      <Easypay />
    </MainLayout>
  );
};

export default Homepage;
