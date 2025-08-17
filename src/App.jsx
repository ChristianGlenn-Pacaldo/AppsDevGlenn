import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      image: "https://whisperofyum.com/wp-content/uploads/2022/03/pancit-canton-683x1024.jpg",
      name: "Pancit Canton Whisper of Yum",
      price: 20.00,
      description: "Sa tikim, mapapa yummy ka talaga!.",
    },
    {
      id: 2,
      image: "https://panlasangpinoy.com/wp-content/uploads/2023/10/special-pancit-canton-500x500.jpg",
      name: "Panlasang Pinoy Special Pancit Canton",
      price: 32.00,
      description: "Lami ni siya",
    },
    {
      id: 3,
      image: "https://yummykitchentv.com/wp-content/uploads/2023/01/pancit-canton-recipe-500x500.jpg",
      name: "Pancit Canton Guisado",
      price: 25.00,
      description: "Masarap pang snacks lalo na sa midnight snack.",
    },
    {
      id: 4,
      image: "https://thefoodietakesflight.com/wp-content/uploads/2021/03/vegan-filipino-stir-fried-noodles-or-pancit-canton-recipe-3-684x1024.png",
      name: "Vegan Pancit Canton",
      price: 25.00,
      description: "Malakas sa Pulutan!.",
    },
    {
      id: 5,
      image: "https://pinoyfoodsapp.akabanebussan.com/cdn/shop/files/38439-APP-20240624-01.jpg?v=1720162126",
      name: "Lucky Me Instant Pancit Canton Sweet and Spicy 60g",
      price: 25.00,
      description: "Sweet and Spicy.",
    },
    {
      id: 6,
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3IhmuAbJeVlB-2uKSvYIwt4fwznMl0-hZpnC6TaBKOwoLD1HNrCZSM5i-QHVdnCiYBMXMDGJyvD1owANy7nE3N9F2inbLdS-QZEOIwUSQC_mf4MjKnzLcDC3gW1FOQ4MQnpb8sgFmZ7CB3aqY6k44JXYE15asZ3KE-hf4AxiS57I-PC96ZFz8UjSHy04/w1200-h630-p-k-no-nu/Lucky%20Me!%20Pancit%20Canton%20Kalamansi%20Makes%20New%20York%20Time's16%20Best%20Instant%20Noodles%20List%20-%20Metroscene%20Mag_.png",
      name: "Lucky Me! Pancit Canton Kalamansi",
      price: 30.00,
      description: "Makes New York Time's 16 Best Instant Noodles List",
    },
    {
      id: 7,
      image: "https://kitchenconfidante.com/wp-content/uploads/2019/01/Pancit-Canton-Filipino-Stir-Fry-Noodles-kitchenconfidante.com-7288.jpg",
      name: "Pancit Canton (Filipino Stir-Fried Noodles)",
      price: 10.00,
      description: "Sa unang kagat, lami e paak.",
    },
    {
      id: 8,
      image: "https://pickledplum.com/wp-content/uploads/2025/02/Canton-Pancit-3.jpg",
      name: "Pancit Canton | Pickled Plum",
      price: 30.00,
      description: "Pancit Canton is a Filipino noodle dish made with stir-fried egg noodles, vegetables, and meat or seafood.",
    },
  ];

  return (
    <div className="app">
      <h1 className="title">🛒 Kantunan ni Echan</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;