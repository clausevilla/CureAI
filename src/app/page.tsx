import { Lights } from "@/components/lights";
import { TextLoop } from '@/components/ui/text-loop';
import Marquee from "@/components/ui/marquee";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import { PlusIcon } from 'lucide-react';

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

const testimonials = [
  {
    title: 'Testimonial 1',
    subtitle: 'Happy Customer',
    image: '/path-to-image1.jpg',
    description: 'This product is amazing! Totally recommend it to everyone.',
  },
  {
    title: 'Testimonial 2',
    subtitle: 'Satisfied Client',
    image: '/path-to-image2.jpg',
    description: 'Great service and fantastic results!',
  },
  {
    title: 'Testimonial 3',
    subtitle: 'Long-time User',
    image: '/path-to-image3.jpg',
    description: 'I’ve been using this for years, and it’s still the best!',
  },
];

function TestimonialsMarquee() {
  return (
    <Marquee
      speed={20} // Adjust speed as needed
      direction="left"
      className="w-full flex items-center gap-4"
    >
      {testimonials.map((testimonial, idx) => (
        <MorphingDialog
          key={idx}
          transition={{
            type: 'spring',
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: '12px',
            }}
            className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
          >
            <MorphingDialogImage
              src={testimonial.image}
              alt={testimonial.title}
              className='h-48 w-full object-cover'
            />
            <div className='flex flex-grow flex-row items-end justify-between p-2'>
              <div>
                <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                  {testimonial.title}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                  {testimonial.subtitle}
                </MorphingDialogSubtitle>
              </div>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: '24px',
              }}
              className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
            >
              <MorphingDialogImage
                src={testimonial.image}
                alt={testimonial.title}
                className='h-full w-full'
              />
              <div className='p-6'>
                <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                  {testimonial.title}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                  {testimonial.subtitle}
                </MorphingDialogSubtitle>
                <MorphingDialogDescription>
                  <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                    {testimonial.description}
                  </p>
                </MorphingDialogDescription>
              </div>
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      ))}
    </Marquee>
  );
}

export function TextLoopCustomVariantsTransition() {
  return (
    <div className='inline-flex whitespace-pre-wrap text-4xl font-bold text-left mt-20' style={{ color: '#4c2882' }}>
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
            filter: 'blur(4px)',
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: 'blur(0px)',
          },
          exit: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: 'blur(4px)',
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

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
       <header className="flex justify-between items-center w-full absolute top-6 left-6 px-6">
        <img src="/images/logo.png" alt="Logo" className="h-4 sm:h-10" />
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-white gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-11 px-4 sm:px-6 mr-6"
          href="/contact"
          style={{ backgroundColor: '#4c2882' }}
        >
          Contact
        </a>
      </header>
      <div className="flex justify-center items-center">
        <TextLoopCustomVariantsTransition />
      </div>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <p> Blablabla</p>
        <div className="flex flex-wrap gap-4">
          <TestimonialsMarquee />
        </div>   
      </main>
      <div className={'absolute bottom-0 left-0 w-full h-full z-0 animate-appear opacity-0'}>
        <Lights />
      </div>
    <footer className="flex justify-center items-center w-full absolute bottom-8 left-6 px-6">
      <AppleStyleDock />
    </footer>
    </div>

  );
}
