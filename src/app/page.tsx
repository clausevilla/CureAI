"use client"
import * as React from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Lights } from "@/components/lights";
import { TextLoop } from '@/components/ui/text-loop';
import WaterTracker from '@/components/ui/water-tracker';
import Ticker from '@/components/ui/ticker';
import WeatherCard from '@/components/ui/weather-card';
import AiButton from '@/components/ui/ai-button';
import { Terminal } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import TypingText from "@/components/ui/typing-text";
import { Badge } from "@/components/ui/badge";
import { TextArea } from "@/components/ui/text-area-2";
import { useEffect } from "react";
import { TextLoopCustomVariantsTransition } from "@/components/ui/text-loop-2";

import { FactCard } from "@/components/ui/factcard-2";

import { LifeLine } from "react-loading-indicators";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { SurveyDialog } from "@/components/ui/surveydialog";

// the api function for the lifestyle survey
import { sendLifestyleMessage, LifestyleData } from "@/utils/api";

// the api function for the cards
import { sendCancerTypeMessage, CancerTypeData } from "@/utils/api-cards";

import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { CarouselSpacing } from "@/components/ui/carousel-2";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { send } from "process";


export default function Home() {
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [uvIndex, setUvIndex] = React.useState(0);

  React.useEffect(() => {
    // get the users geolocation if available
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not available. Using coordinates of Gothenburg, Sweden.");
      setLatitude(57.7089);
      setLongitude(11.9746);
    }

    // get the weather data
    // headers
    const headers = {
      "x-access-token": "openuv-1c9alrm6mdykde-io",
      "content-type": "application/json"
    };

    axios.get(`https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}`, { headers })
      .then((response) => {
        console.log(response.data);
        // truncate the uv index to 1 decimal place
        setUvIndex(parseFloat(response.data.result.uv.toFixed(1)));
      })
      .catch((error) => {
        console.error(error);
        setUvIndex(0);
      });
  }, []);

  return (
    <div>
  {/* Background Lights */}
  <div className="fixed bottom-0 left-0 w-full h-full z-[-1] pointer-events-none">
    <Lights />
  </div>

  {/* Header */}
  <header className="flex justify-between items-center w-full px-4 sm:px-8 absolute top-4 sm:top-6">
    <img src="/images/logo.png" alt="Logo" className="h-6 sm:h-10" />
    <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-white gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-6"
      href="https://www.1177.se/"
      style={{ backgroundColor: '#4c2882' }}
    >
      Help
    </a>
  </header>

  {/* Text Loop Section */}
  <div className="flex flex-col items-center w-full px-4">
    <TextLoopCustomVariantsTransition />
    <p
      className="inline-flex text-sm sm:text-base text-center mt-8"
      style={{ color: '#4c2882' }}
    >
      A real-world solution to a real-world problem — Swipe through the cards below  <br /> and 
      explore the likelihood of developing a specific cancer type and how to prevent it!
    </p>
  </div>

  {/* Main Content */}
  <main className="mt-0 flex flex-col items-center gap-8 p-20 sm:gap-12">
    {/* Carousel */}
    <CarouselSpacing />

    {/* Info Section */}
    <div className="mt-5 flex flex-wrap justify-center w-full gap-6 lg:gap-20">
      <div className="flex flex-wrap justify-center gap-4">
        <WeatherCard uvIndex={uvIndex}/>
        <WaterTracker dailyGoal={3000} />
      </div>
      <FactCard />
    </div>
    <div className="mt-6 flex flex-col w-full justify-center items-center">
      <div className="lg:min-w-[1000px] lg:max-w-[1120px] rounded-sm bg-[#f0dffc] items-start mb-8 px-4 py-2 text-purple-900 shadow-xl">
      <TypingText 
        alwaysVisibleCount={1}
        delay={60}
        repeat={true} 
        texts={[ 
          "> Prevention is better than cure.",
          "> Receive personalized recommendations!",
        ]}
        waitTime={500}
        />
    </div>
      <SurveyDialog />
      <Slider />
    </div>
  </main>
  </div>
  );
}
