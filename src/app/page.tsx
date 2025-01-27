"use client"
import * as React from "react";
import { cn } from "@/lib/utils";
import { Lights } from "@/components/lights";
import { TextLoop } from '@/components/ui/text-loop';
import WaterTracker from '@/components/ui/water-tracker';
import Ticker from '@/components/ui/ticker';
import WeatherCard from '@/components/ui/weather-card';
import SplitText from '@/components/ui/split-text';
import AiButton from '@/components/ui/ai-button';
import { Terminal } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TextLoopCustomVariantsTransition() {
  return (
    <div className='inline-flex whitespace-pre-wrap text-4xl font-bold text-center absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20' style={{ color: '#4c2882' }}>
      F*@#   {' '}
      <TextLoop
        className='overflow-y-clip'
        transition={{
          type: 'spring',
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            scale: 0.9,
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            scale: 1,
          },
          exit: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            scale: 0.9,
          },
        }}
      >
        <span style={{ color: 'orange' }}>Kidney</span>
        <span style={{ color: '#ffd300' }}>Bone</span>
        <span style={{ color: 'grey' }}>Brain</span>
        <span style={{ color: 'blue' }}>Colon</span>
        <span style={{ color: '#ff77ff' }}>Breast</span>
        <span style={{ color: 'green' }}>Liver</span>
        <span style={{ color: 'teal' }}>Ovarian</span>
        <span style={{ color: '#add8e6' }}>Prostate</span>
      </TextLoop>
      {' '}   Cancer
    </div>
  );
}

const items = Array(6).fill(null);

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

export function FactCard() {
  return (
  <Card className="w-[600px] h-52">
      <CardHeader>
      <Ticker
            className="text-4xl md:text-6xl"
            value="456.78"
          />
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

type SliderProps = React.ComponentProps<typeof Slider>
export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}

export function SurveyCard() {
  // State for form values
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [sliderValues, setSliderValues] = useState({
    smoker: [0],
    alcohol: [0],
    activity: [0],
    pollution: [0],
    sunExposure: [0]
  });

  const handleSliderChange = (name: string, value: number[]) => {
    setSliderValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <Card className="w-[1125px] h-64 mr-2 relative flex flex-col bg-opacity-10 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-padding p-4 backdrop-blur-sm backdrop-filter dark:from-gray-700 dark:to-gray-900">
      <CardHeader>
        <div
          className="inline-flex whitespace-pre-wrap text-4xl font-bold mt-12"
          style={{ color: "#4c2882" }}
        >
          Cut the
        </div>
      </CardHeader>
      <CardContent>
        <div className="inline-flex whitespace-pre-wrap text-xl font-bold">
          <SplitText />
        </div>
        <CardDescription className="absolute top-0 right-0 p-4 mr-8 mt-2 text-right">
          <CardTitle className="mb-2">Predict your most likely cancer types</CardTitle>
          <CardTitle className="mb-2">And receive AI personalized recommendations</CardTitle>
          <CardTitle className="mb-2">Through a short survey!</CardTitle>
        </CardDescription>
        <Dialog>
          <DialogTrigger asChild>
            <AiButton as="div" className="flex justify-end mr-4"/>
          </DialogTrigger> 
          <DialogContent className="w-[95vw] max-w-6xl h-[90vh] p-10">
            <DialogHeader className="mb-8">
              <DialogTitle className="inline-flex whitespace-pre-wrap text-3xl justify-center font-bold text-[#4c2882]">
                Early Detection Survey
              </DialogTitle>
            </DialogHeader>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Age and Gender Section */}
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="age-select" className="text-base font-medium">Age Range</Label>
                  <Select value={age} onValueChange={setAge}>
                    <SelectTrigger id="age-select" className="w-full">
                      <SelectValue placeholder="Select Age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-20">18-20</SelectItem>
                      <SelectItem value="21-30">21-30</SelectItem>
                      <SelectItem value="31-40">31-40</SelectItem>
                      <SelectItem value="41-50">41-50</SelectItem>
                      <SelectItem value="51+">51+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="gender-select" className="text-base font-medium">Gender</Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger id="gender-select" className="w-full">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
          
              {/* Sliders Section */}
              <div className="space-y-6">
                {[
                  { label: "Are you a smoker?", name: "smoker" },
                  { label: "Alcohol Consumption", name: "alcohol" },
                  { label: "Level of physical activity", name: "activity" },
                  { label: "Level of air pollution in your environment", name: "pollution" },
                  { label: "Level of sun exposure", name: "sunExposure" }
                ].map(({ label, name }) => (
                  <div key={name} className="space-y-3">
                    <Label htmlFor={`slider-${name}`} className="text-base font-medium">
                      {label}
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id={`slider-${name}`}
                        min={0}
                        max={10}
                        step={1}
                        value={sliderValues[name]}
                        onValueChange={(value) => handleSliderChange(name, value)}
                        className="flex-1 [&_[role=slider]]:bg-white [&_[role=slider]]:border-black [&_[role=slider]]:focus:ring-white [&_.relative]:bg-[#CBC3E3]"
                      />
                      <span className="w-8 text-right">{sliderValues[name]}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Fields Section */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="city-input" className="text-base font-medium">City</Label>
                  <Input id="city-input" placeholder="Enter your city" className="w-full" />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="genetic-history-input" className="text-base font-medium">Genetic History</Label>
                  <Input id="genetic-history-input" placeholder="Enter any known genetic history" className="w-full" />
                </div>
              </div>

              {/* Checkbox Section */}
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="passive-smoker-checkbox"
                  className="h-5 w-5 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                />
                <Label 
                  htmlFor="passive-smoker-checkbox" 
                  className="text-base font-medium"
                >
                  Are you a passive smoker?
                </Label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-zinc-50 dark:bg-white dark:text-zinc-900 hover:bg-opacity-90 transition-colors"
              >
                Submit
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute bottom-0 left-0 w-full h-full z-[-1] pointer-events-none">
        <Lights />
      </div>
       <header className="flex justify-between items-center w-full absolute top-6 left-6 px-6">
        <img src="/images/logo.png" alt="Logo" className="h-4 sm:h-10" />
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-white gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-11 px-4 sm:px-6 mr-6"
          href="https://www.1177.se/"
          style={{ backgroundColor: '#4c2882' }}
        >
          Help
        </a>
      </header>
        <div className="flex justify-center w-full">
          <TextLoopCustomVariantsTransition />
          <p className='inline-flex whitespace-pre-wrap text-lg text-center mt-8' style={{ color: '#4c2882' }}>Intro text — </p>
        </div>

      <main className="mt-16 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent>
            {items.map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <CardWithForm />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
        <div className="mt-16">
        <div className="flex flex-row justify-between gap-12">
        <div className="flex flex-row gap-4 mr-12 ml-6">
          <WeatherCard />
          <WaterTracker />
        </div>
        <div className="flex flex-row mr-10">
          <FactCard />
        </div>
        </div>
        </div> 
        <div className="mt-16">
          <SurveyCard />
        </div>
      </main>
    </div>
  );
}
