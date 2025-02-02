"use client";

import * as React from "react";
import { TextLoop } from '@/components/ui/text-loop';


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