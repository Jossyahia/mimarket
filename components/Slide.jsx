"use client";
import { useEffect, useState } from "react";
import "../styles/Banner.scss";

const Slide = () => {
  const [randomStaticText, setRandomStaticText] = useState("");

  useEffect(() => {
    // Array of possible static texts
    const staticTexts = [
      "Click, Shop, Smile - Elevate Your Everyday with Unbeatable Deals!",
      "Discover Amazing Deals That Will Make Your Day!",
      "Shop Smart, Shop Now - Unbelievable Discounts Await!",
      "A wise consumer understands that the true value of a purchase lies not just in the price paid, but in the quality received. Opting for quality at a pocket-friendly price is a testament to smart shopping.",
      "Your One-Stop Shop for Irresistible Bargains!",
      "Investing in quality at a pocket-friendly price is not just a purchase; it's a smart decision that pays dividends in satisfaction and longevity.",
      "Quality doesn't have to come with a hefty price tag; choosing wisely means enjoying the benefits of both excellence and affordability.",
      "Buying quality at a reasonable cost is like making an investment in your own satisfaction. It's a win-win that reflects a discerning taste and financial savvy.",
      "In the realm of consumer choices, the sweet spot is where quality meets affordability. It's not just about spending less; it's about getting more value for your money.",
      "Choosing quality over quantity doesn't mean breaking the bank. It's about finding the delicate balance where superior craftsmanship meets a pocket-friendly price.",
      "Quality at a pocket-friendly price is the gold standard of smart shopping. It's a commitment to both financial responsibility and the appreciation of enduring excellence.",
      "A discerning buyer knows that the true beauty of a purchase lies in the blend of quality and affordability. It's not about spending less; it's about getting more for your money.",
      "Purchasing quality at a pocket-friendly price is a strategic decision that redefines the concept of value. It's not just about the cost; it's about the enduring satisfaction that comes with a smart choice.",
      "The real art of shopping is in discovering the sweet spot where quality and affordability converge. It's a skill that transforms every purchase into a wise investment in both enjoyment and savings.",

      // Add more text options as needed
    ];

    // Select a random index from the array
    const randomIndex = Math.floor(Math.random() * staticTexts.length);

    // Get the random static text
    const randomStaticText = staticTexts[randomIndex];

    // Set the random static text in the state
    setRandomStaticText(randomStaticText);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="banner" suppressHydrationWarning={true}>
      <h1>{randomStaticText}</h1>
    </div>
  );
};

export default Slide;
