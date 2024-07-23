"use client"
import Buttons from "@/components/Buttons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Productslist from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";
import Wrapper from "@/components/Wrapper";

const HomePage = () => {

  return (
    <main>
      <Header />
      <div className="relative min-h-screen flex flex-col items-center justify-center py-8" style={{ backgroundImage: 'url("https://www.lucileinwonderland.fr/wp-content/uploads/2020/05/21-idees-de-repas-healthy-3-couv-lucileinwonderland.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className="flex flex-col items-center justify-center py-8">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-10 font-poppins">
            Healthy
          </h1>
          <Buttons />
          <SearchBar />
        </div>
        <p className="mt-4 text-xl text-black px-5 bg-white">
          Découvrez notre sélection exquise de plats healthy, conçus pour ravir vos papilles tout en nourrissant votre corps.
          <br />
          Nos recettes sont élaborées pour vous apporter l'énergie nécessaire pour votre journée tout en prenant soin de votre bien-être.
          <br />
          Optez pour une alimentation savoureuse et équilibrée avec nos plats healthy, livrés directement chez vous pour votre plus grand confort.
        </p>

      </div>
      <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-10 font-poppins text-center">
        Our Products
      </h1>


      <Wrapper>
        <Productslist />
      </Wrapper>


      <Footer />
    </main>

  );
};

export default HomePage;
