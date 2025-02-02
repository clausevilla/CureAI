import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Ticker from '@/components/ui/ticker';
import React from 'react'


export function FactCard() {
    return (
    <Card className="w-[600px] lg:h-52 h-62">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Did you know?</CardTitle>
        <Ticker
              className="text-4xl md:text-6xl"
              value="300 Billion"
            />
          <CardDescription className="lg:mt-6"> 
          <strong className="text-bold">Of our cells are replaced daily!</strong>  <br /> And an adequate cellular hydration makes it possible.
          <br /> Curious how more of your habits can influence cancer risk? 
          <strong className="text-bold"> Scroll down to our survey!</strong>
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }
  