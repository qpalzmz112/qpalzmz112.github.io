import { Header } from "../index.js";

export default function Home() {
  return (
    <main className="bg-gradient-to-t from-white to-sand-green absolute h-screen w-screen font-playfair text-black">
      <Header />
      <div className="grid grid-cols-4 gap-4 p-4"></div>
    </main>
  );
}
