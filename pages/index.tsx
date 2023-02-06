import MainLayout from "@/components/layout/MainLayout";
import Cases from "@/components/screens/home/Cases/Cases";
import Clients from "@/components/screens/home/Clients/Clients";
import Hero from "@/components/screens/home/Hero/Hero";
import Leader from "@/components/screens/home/Leader/Leader";
import Misson from "@/components/screens/home/Misson/Misson";
import Numbers from "@/components/screens/home/Numbers/Numbers";
import Purpose from "@/components/screens/home/Purpose/Purpose";
import Reviews from "@/components/screens/home/Reviews/Reviews";
import Team from "@/components/screens/home/Team/Team";
import Trust from "@/components/screens/home/Trust/Trust";

export default function Home() {
  return (
    <>
      <MainLayout title="index page">
        <Hero />
        <Leader />
        <Purpose />
        <Numbers />
        <Clients />
        <Team />
        <Misson />
        <Cases />
        <Reviews />
        <Trust />
      </MainLayout>
    </>
  );
}
