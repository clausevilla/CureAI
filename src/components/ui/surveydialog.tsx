"use client";
import * as React from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useState } from "react";
import AiButton from "./ai-button";

import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Lights } from "../lights";
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


import { LifeLine } from "react-loading-indicators";

// the api function for the lifestyle survey
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
        setAiResponse(JSON.parse(response.content));
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
          {showLoading && <div className="flex items-center justify-center h-full">
            <LifeLine color="#2929ac" size="medium" text="" textColor="" />
            <Lights/>
          </div>}
  
          {/* AI result */}
          {showAiResponse && <div hidden={!showAiResponse}>
            <div className="space-y-4 p-4">
              <h2 className="text-xl font-bold text-[#4c2882]">Predicted Cancer Types</h2>
              {aiResponse.cancerTypes?.length > 0 ? (
                aiResponse.cancerTypes.map((item, index) => (
                  <Card key={index} className="p-4">
                    <CardContent>
                      <Badge className="text-lg mb-2">{item.type}</Badge>
                      <p className="text-purple-900">{item.reason}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p>No cancer types predicted.</p>
              )}
  
              <h2 className="text-xl font-bold text-[#4c2882]">Recommendations</h2>
              {aiResponse.recommendations?.length > 0 ? (
                <ul className="list-disc pl-5">
                  {aiResponse.recommendations.map((rec, index) => (
                    <li key={index} className="text-[#4c2882]">{rec.recommendation}</li>
                  ))}
                </ul>
              ) : (
                <p>No recommendations available.</p>
              )}
            </div>
            {/* close button */}
            <div className="flex justify-center mt-8">
              <Button onClick={() => setOpen(false)} className="bg-[#4c2882] text-white w-full py-3">Close</Button>
            </div>
            <Lights/>
          </div> }
  
          {showForm && <form className="space-y-8" onSubmit={handleSubmit} hidden={!showForm}>
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
          </form> }
        </DialogContent>
      </Dialog>
    );
  }