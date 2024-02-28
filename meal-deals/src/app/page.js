import Hero from "../components/layout/Hero";
import { categories } from "@/data/Data.js";
import Footer from "@/components/layout/Footer";
import MenuItem from "@/components/menu/MenuItem";

export default function Home() {
  return (
    <section className="mx-3">
      <Hero />
      <div className="bg-primary p-4 py-6 my-4 rounded-lg">
        <h2 className="md:text-5xl text-fontSecondary font-bold text-left mb-5 text-uppercase">
          Our Best Sells
        </h2>
        <MenuItem />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
