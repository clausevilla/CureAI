import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { CardWithForm } from '@/components/ui/formcard-2';
import React from 'react';

const items = [
    { title: "Lung Cancer", description: "Go out for a fresh walk", cancerType: "lung" },
    { title: "Brain Cancer", description: "Assess your risk factors", cancerType: "brain" },
    { title: "Kidney Cancer", description: "Maintain a healthy weight", cancerType: "kidney" },
    { title: "Breast Cancer", description: "Reduce fat intake", cancerType: "breast" },
    { title: "Prostate Cancer", description: "Limit alcohol consumption", cancerType: "prostate" },
    { title: "Ovarian Cancer", description: "Keep a healthy diet", cancerType: "ovarian" },
  ];
  
// carousel spacing
export function CarouselSpacing() {
    return (
      <Carousel className="w-full max-w-6xl">
        <CarouselContent className="-ml-1">
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <CardWithForm 
                cancerType={item.cancerType}
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