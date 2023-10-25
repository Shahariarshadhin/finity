import HomeContainer from "@/components/Home/HomeContainer";
import LandingLayout from "@/components/LandingLayout/LandingLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container mx-auto">
        <HomeContainer />
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
