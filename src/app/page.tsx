
import SDGShowcase from "../component/SDGShowcase";
import NavBar from "../component/navbar";
import IndonesiaSDGSection from "../component/description";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#DDDAD0] font-sans dark:bg-[#3C3D37]">
      <NavBar />
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-[#DDDAD0] dark:bg-[#3C3D37]">
        <SDGShowcase />
        <IndonesiaSDGSection />
      </main>
    </div>
  );
}
