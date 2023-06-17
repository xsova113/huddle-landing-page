import {
  HeroSections,
  StatsSection,
  GrowTogether,
  FlowConv,
  YourUsers,
  GetStarted,
} from "./components/sections";

export default function Home() {
  return (
    <main>
      <HeroSections />
      <StatsSection />
      <GrowTogether />
      <FlowConv />
      <YourUsers />
      <GetStarted />
    </main>
  );
}
