import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EducationPage() {
  return (
    <main
      className="flex flex-col h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/Pictures/BackPic.jpg)" }}
    >
      <Header />

      <div className="flex flex-1 items-center justify-center overflow-auto gap-20 text-[100px]">
        COMING SOON
      </div>

      <Footer />
    </main>
  );
}
