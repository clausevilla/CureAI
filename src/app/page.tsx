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
 
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300'  style={{ color: '#4c2882' }} />
    ),
    href: '#',
  },
  {
    title: 'Products',
    icon: (
      <Package className='h-full w-full text-neutral-600 dark:text-neutral-300'  style={{ color: '#4c2882' }} />
    ),
    href: '#',
  },
  {
    title: 'Components',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' style={{ color: '#4c2882' }} />
    ),
    href: '#',
  },
  {
    title: 'Activity',
    icon: (
      <Activity className='h-full w-full text-neutral-600 dark:text-neutral-300'  style={{ color: '#4c2882' }} />
    ),
    href: '#',
  },
  {
    title: 'Change Log',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' style={{ color: '#4c2882' }} />
    ),
    href: '#',
  },
  {
    title: 'Email',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' style={{ color: '#4c2882' }} />
    ),
    href: '#',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' style={{ color: '#4c2882' }} />

    ),
    href: '#',
  },
];

export function AppleStyleDock() {
  return (
    <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}

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

const items = Array(6).fill(null);

export function CardWithForm() {
  return (
    <Card className="lg:w-[350px]">
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

// carousel spacing
export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-6xl">
      <CarouselContent className="-ml-1">
        {items.map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <CardWithForm />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
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
  return (
    <Card className="w-[1125px] h-64 mr-2 relative flex flex-col bg-opacity-10 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-padding p-4 backdrop-blur-sm backdrop-filter dark:from-gray-700 dark:to-gray-900">
      <CardHeader>
        <div
          className="inline-flex whitespace-pre-wrap text-4xl font-bold"
          style={{ color: "#4c2882" }}
        >
          Cut the
        </div>
      </CardHeader>
      <CardContent>
        <div className="inline-flex whitespace-pre-wrap text-4xl font-bold">
          <SplitText />
        </div>
        <CardDescription>
          <p>Predict your most likely cancer types</p>
          <p>And receive AI personalized recommendations</p>
          <p>Through a short survey!</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Dialog className="w-[95vw] max-w-6xl h-[90vh]">
          <DialogTrigger asChild>
            <AiButton  as="div"/>
          </DialogTrigger>
          <DialogContent >
            <DialogHeader>
              <DialogTitle className="inline-flex whitespace-pre-wrap text-3xl font-bold text-[#4c2882]">
                Early Detection Survey
              </DialogTitle>
            </DialogHeader>
            <div className="mt-6 space-y-6">
          {/* Age and Gender Dropdown */}
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-1.5 w-1/2">
              <Label htmlFor="age">Age Range</Label>
              <Select id="age">
                <SelectTrigger>
                  <SelectValue placeholder="Select Age" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="18-20">18-20</SelectItem>
                  <SelectItem value="21-30">21-30</SelectItem>
                  <SelectItem value="31-40">31-40</SelectItem>
                  <SelectItem value="41-50">41-50</SelectItem>
                  <SelectItem value="51+">51+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5 w-1/2">
              <Label htmlFor="gender">Gender</Label>
              <Select id="gender">
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-6">
            <Slider label="Are you a smoker?" step={0} max={10} />
            <Slider label="Alcohol Consumption" step={0} max={10} />
            <Slider label="Level of physical activity" step={0} max={10} />
            <Slider label="Level of air pollution in your environment" step={0} max={10} />
            <Slider label="Level of sun exposure" step={0} max={10} />
          </div>

          <div className="space-y-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Enter your city" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="genetic-history">Genetic History</Label>
              <Input id="genetic-history" placeholder="Enter any known genetic history" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="passive-smoker" className="h-4 w-4 text-purple-500" />
            <Label htmlFor="passive-smoker" className="text-base">Are you a passive smoker?</Label>
          </div>

        </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-zinc-50 dark:bg-white dark:text-zinc-900"
          >
            Submit
          </button>
      </DialogContent>
      </Dialog>
      </CardFooter>
    </Card>
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
    <div className="mt-5 flex flex-wrap justify-center w-full gap-4 sm:gap-6">
      <div className="flex flex-wrap justify-center gap-4">
        <WeatherCard />
        <WaterTracker />
      </div>
      <FactCard />
    </div>

  </main>

</div>

  );
}
