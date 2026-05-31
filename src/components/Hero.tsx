"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const Hero = () => {
  return (
  <div>
    <HeroParallax products={products} />
  </div>
  )
}
export const products = [
  {
    title: "StayNest — Room Listing Platform",
    link: "https://github.com/ritik2177",
    thumbnail: "image/7.png",
  },
  {
    title: "Tuition-Ed Platform",
    link: "https://tuition-ed.com/",
    thumbnail: "image/1.png",
  },
  {
    title: "Cloudinary-Store SaaS",
    link: "https://cloudinarysaass.netlify.app/",
    thumbnail: "image/3.png",
  },
  {
    title: "Currency Converter",
    link: "https://currenccycconverter.netlify.app/",
    thumbnail: "image/4.png",
  },
  {
    title: "Fresh Finale Fiesta",
    link: "https://qr2riitikfreshfinalefista.netlify.app/",
    thumbnail: "image/2.png",
  },
  {
    title: "CollaBharat — Team Collaboration",
    link: "https://github.com/ritik2177",
    thumbnail: "image/15.png",
  },
  {
    title: "Tuition-Ed Admin Dashboard",
    link: "https://new.tuition-ed.com/",
    thumbnail: "image/10.png",
  },
  {
    title: "GitHub Profile",
    link: "https://github.com/ritik2177",
    thumbnail: "image/8.png",
  },
  {
    title: "CollaBharat Dashboard",
    link: "https://github.com/ritik2177",
    thumbnail: "image/14.png",
  },
  {
    title: "Tuition-Ed Marketplace",
    link: "https://tuition-ed.com/",
    thumbnail: "image/1.png",
  },
  {
    title: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/ritik-kumar-058694318/",
    thumbnail: "image/9.png",
  },
  {
    title: "Weather App",
    link: "https://watherappa.netlify.app/",
    thumbnail: "image/6.png",
  },
  {
    title: "Password Generator",
    link: "https://tranquil-jelly-506a44.netlify.app/",
    thumbnail: "image/5.png",
  },
  {
    title: "StayNest Student Rental",
    link: "https://github.com/ritik2177",
    thumbnail: "image/13.png",
  },
  {
    title: "Cloudinary-Store AI Content",
    link: "https://cloudinarysaass.netlify.app/",
    thumbnail: "image/7.png",
  },
];


export default Hero;