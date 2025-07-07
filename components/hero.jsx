"use client"
 import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from 'react';

const HeroSection = () => {
   const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="w-full pt-30 md:pt-36 pb-10">
      <div className="space-y-6 text-center">
        <div>
            <h1 className="text-5xl md:text-6xl  bg-clip-text text-transparent font-bold pb-6 bg-gradient-to-b from-gray-700 via-gray-200 to-gray-700">
            Like an AI Ally <br/> in your Career Journey
            </h1>
            <p className="text-muted-foreground mx-auto"> Your personalized AI career coach — helping you craft resumes, prep for interviews, and land your dream job with smart, actionable guidance.</p>
        </div>
     <div className="flex justify-center space-x-4">
      <Link href="/dashboard">
      <Button size="lg"  className="px-8 bg-white text-black hover:bg-gray-100">
        Get Started</Button></Link>
       
         </div>
         <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image  px-4 md:px-8">
           <Image
              src="/a-background.jpeg"
              width={1280}
              height={720}
              alt="Banner AskAlly"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
            </div>
         </div>
          </div>
    </section>
  )
}

export default HeroSection
