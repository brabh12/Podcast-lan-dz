import { AboutPodcast } from "@/sections/AboutPodcast";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { PodcastGoals } from "@/sections/Goals";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";


export default function Home() {
  return ( 
     <>
       <Header />
       <Hero />
       <LogoTicker />
       <AboutPodcast />
       <PodcastGoals />
       <Contact />
       <Footer />
     </>
  );
}
