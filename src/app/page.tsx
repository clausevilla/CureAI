"use client"
import * as React from "react";
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

// the api function
import { sendLifestyleMessage, LifestyleData } from "@/utils/api";

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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TextLoopCustomVariantsTransition() {
  return (

    <div className='inline-flex whitespace-pre-wrap text-3xl md:text-4xl font-bold text-center transformf mt-32' style={{ color: '#4c2882' }}>
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

const items = [
  { title: "Lung Cancer", description: "Take a quick health survey." },
  { title: "Brain Cancer", description: "Assess your risk factors." },
  { title: "Kidney Cancer", description: "Track your daily habits." },
  { title: "Breast Cancer", description: "Get personalized meal plans." },
  { title: "Prostate Cancer", description: "Stay active and healthy." },
  { title: "Ovarian Cancer", description: "Understand your genetics." },
];

export function CardWithForm({title, description}) {
  return (
    <Card className="lg:w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
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
        <Button className="bg-[#4c2882] text-white w-full py-3">Deploy</Button>
      </CardFooter>
    </Card>
  )
}

// carousel spacing
export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-6xl">
      <CarouselContent className="-ml-1">
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <CardWithForm 
              title={item.title} 
              description={item.description} 
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
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


export function SurveyDialog() {
  // Dialog open state
  const [open, setOpen] = useState(false);
  
  // Form states
  const [showForm, setShowForm] = useState(true);
  const [showAiResponse, setShowAiResponse] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [geneticHistory, setGeneticHistory] = useState("");
  const [passiveSmoker, setPassiveSmoker] = useState(0);
  const [sliderValues, setSliderValues] = useState({
    smoker: [0],
    alcohol: [0],
    activity: [0],
    pollution: [0],
    sunExposure: [0]
  });
  const [aiResponse, setAiResponse] = useState("");

  const handleSliderChange = (name: string, value: number[]) => {
    setSliderValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      age,
      gender,
      sliderValues,
      passiveSmoker,
      city,
      geneticHistory
    });
    // open the dialog with the ai api response
    // AiDialog
    // setOpen(false); // Close dialog after submission
    // pass values into lifestyledata interface

    setShowLoading(true);
    setShowForm(false);

    const lifestyleData: LifestyleData = {
      sex: gender,
      age: parseInt(age),
      smoker: sliderValues.smoker[0],
      alcohol: sliderValues.alcohol[0],
      physicalActivity: sliderValues.activity[0],
      airPollution: sliderValues.pollution[0],
      sunExposure: sliderValues.sunExposure[0],
      passiveSmoker: (passiveSmoker == 1) ? true : false,
      geneticHistory: geneticHistory,
      city: city
    };
    
    sendLifestyleMessage(lifestyleData)
      .then((response) => {
        console.log(response);
        setAiResponse(response);
        setShowLoading(false);
        setShowAiResponse(true);
        setOpen(true);
      })
      .catch((error) => {
        setShowLoading(false);
        setShowForm(true);
        console.error(error);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center justify-center">
        <AiButton as="div" className="justify-center"/>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[80vw] max-w-4xl h-[90vh] p-10 bg-white overflow-y-auto">
        <DialogHeader className="mb-8">
          <DialogTitle className="inline-flex whitespace-pre-wrap text-3xl justify-center font-bold text-[#4c2882]">
            Early Detection Survey
          </DialogTitle>
        </DialogHeader>

        {/* loading panel */}
        <div hidden={!showLoading} className="flex items-center justify-center h-full">
          <LifeLine color="#2929ac" size="medium" text="" textColor="" />
        </div>

        {/* loading panel animation */}
        <div hidden={!showLoading}>
          
        </div>

        <form className="space-y-8" onSubmit={handleSubmit} hidden={!showForm}>
          {/* Age and Gender Section */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <label htmlFor="number-input" className="text-base font-medium text-[#4c2882]">Select age:</label>
              <input 
              type="number" 
              id="number-input" 
              onChange={(e) => setAge(e.target.value)}
              aria-describedby="helper-text-explanation" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              placeholder="20" 
              required 
              min={12} 
              max={110} 
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="gender-select" className="text-base font-medium text-[#4c2882]">Gender</Label>
              <div className="flex items-center mb-4">
              <input 
                id="default-radio-1" 
                type="radio" 
                value="male" 
                name="gender" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">Male</label>
              </div>
              <div className="flex items-center">
              <input 
                id="default-radio-2" 
                type="radio" 
                value="female" 
                name="gender" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900">Female</label>
              </div>
              <div className="flex items-center">
              <input 
                id="default-radio-3" 
                type="radio" 
                value="other" 
                name="gender" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                checked={gender === "other"}
                onChange={() => setGender("other")}
              />
              <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900">Other</label>
              </div>
            </div>
          </div>

          {/* Sliders Section */}
          <div className="space-y-6 text-[#4c2882]">
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
                    className="flex-1 [&_[role=slider]]:bg-[#4c2882] [&_[role=slider]]:border-[#4c2882] [&_[role=slider]]:focus:ring-white [&_.relative]:bg-[#CBC3E3]"
                  />
                  <span className="w-8 text-right">{sliderValues[name]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Fields Section */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="city-input" className="text-base font-medium text-[#4c2882]">City</Label>
              <Input id="city-input" placeholder="Enter your city" className="w-full bg-white" onChange={(e) => setCity(e.target.value)} />
            </div>

            <div className="space-y-3">
              <Label htmlFor="genetic-history-input" className="text-base font-medium  text-[#4c2882]">Genetic History</Label>
              <Input id="genetic-history-input" placeholder="Enter any known genetic history" className="w-full bg-white" onChange={(e) => setGeneticHistory(e.target.value)} />
            </div>
          </div>

          {/* Checkbox Section */}
            <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="passive-smoker-checkbox"
              className="h-5 w-5 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
              onChange={(e) => setSliderValues(prev => ({
              ...prev,
              passiveSmoker: e.target.checked ? 1 : 0
              }))}
            />
            <Label
              htmlFor="passive-smoker-checkbox"
              className="text-base font-medium text-[#4c2882]"
            >
              Are you a passive smoker?
            </Label>
            </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-lg bg-[#4c2882] px-6 py-3 text-sm font-medium text-zinc-50 hover:bg-opacity-90 transition-colors"
          >
            Submit
          </button>
          <div className="fixed bottom-0 left-0 w-full h-full z-[-1] pointer-events-none">
            <Lights />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
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
      Intro text —
    </p>
  </div>

  {/* Main Content */}
  <main className="mt-0 flex flex-col items-center gap-8 p-20 sm:gap-12">
    {/* Carousel */}
    <CarouselSpacing />

    {/* Info Section */}
    <div className="mt-5 flex flex-wrap justify-center w-full gap-6 lg:gap-20">
      <div className="flex flex-wrap justify-center gap-4">
        <WeatherCard />
        <WaterTracker />
      </div>
      <FactCard />
    </div>
    <div className="mt-6 flex flex-col w-full">
      <div className="lg:min-w-96 lg:max-w-[1120px] rounded-sm items-start lg:ml-20 mb-8 px-4 py-2 text-purple-900 shadow-xl">
      <TypingText 
        alwaysVisibleCount={1}
        delay={60}
        repeat={true} 
        texts={[ 
          "> Prevention is better than cure.",
          "> Predict your most likely cancer types and receive personalized recommendations through a short survey!",
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
