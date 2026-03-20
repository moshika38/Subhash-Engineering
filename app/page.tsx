import Hero from "./components/sections/Hero";
import MachinedExcellence from "./components/sections/MachinedExcellence";
import CoreServices from "./components/sections/CoreServices";
import Portfolio from "./components/sections/Portfolio";
import Advantage from "./components/sections/Advantage";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <Hero />
      <MachinedExcellence />
      <CoreServices />
      <Portfolio />
      <Advantage />
    </div>
  );
}
