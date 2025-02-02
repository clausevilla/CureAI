import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { CardWithForm } from '@/components/ui/formcard-2';
import React from 'react';

const items = [
    { title: "Lung Cancer", description: "Go out for a fresh walk" },
    { title: "Brain Cancer", description: "Assess your risk factors" },
    { title: "Kidney Cancer", description: "Maintain a healthy weight" },
    { title: "Breast Cancer", description: "Reduce fat intake" },
    { title: "Prostate Cancer", description: "Limit alcohol consumption" },
    { title: "Ovarian Cancer", description: "Keep a healthy diet" },
  ];
  
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