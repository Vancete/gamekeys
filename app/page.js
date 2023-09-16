import { Header } from "@/src/components/Header/Header";
import { MainBanner } from "@/src/components/MainBanner/MainBanner";
import { GameCard } from "@/src/components/GameCard/GameCard";

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <GameCard />
      </main>
    </>
  );
}
