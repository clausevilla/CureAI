import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { CancerTypeData, sendCancerTypeMessage } from "@/utils/api";
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { LifeLine } from 'react-loading-indicators';
import { Textarea } from '@/components/ui/textarea';


export function CardWithForm({title, description, cancerType}) {
    const [showForm, setShowForm] = useState(true);
    const [showAiResponse, setShowAiResponse] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    
    //Input data
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [aiResponse, setAiResponse] = useState("");
  
    const [submitClicked, setSubmitClicked] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitClicked(true); 
      // Handle form submission here
      console.log({
        age,
        message,
        cancerType
      });

      setShowLoading(true);
      setShowForm(false);

      const cancerTypeData: CancerTypeData = {
        age: parseInt(age),
        message,
        cancerType};
  
        sendCancerTypeMessage(cancerTypeData)
        .then((response) => {
          setAiResponse(JSON.parse(response.content));
          setShowLoading(false);
          setShowAiResponse(true);
        })
        .catch((error) => {
          console.error(error);
          setShowLoading(false);
          setShowForm(true);
        });
    };
    
    return (
      <Card className="lg:w-[350px] lg:min-h-[350px]">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
  
          {/* loading panel */}
          {showLoading && <div className="flex items-center justify-center h-full">
            <LifeLine color="#4c2882" size="medium" text="" textColor="" />
          </div> }
          
          {/* AI result */}
          {showAiResponse && <div>
            <div className="space-y-4 p-6">
              <hr className="rounded"/>
              <h2 className="text-lg md:text-xl font-bold">Prediction Result</h2>
                <p className={`text-sm ${aiResponse.prediction ? "text-red-900" : "text-green-900"}`}>
                {aiResponse.prediction ? "Medium/High Risk" : "Low Risk"}
                </p>

              <h2 className="text-lg font-bold md:text-xl">Reasoning</h2>
              <p className="text-purple-900 text-sm text-justify">{aiResponse.reason}</p>

              <h2 className="text-lg font-bold md:text-xl">Recommendations</h2>
              {aiResponse.recommendations?.length > 0 ? (
                <ul className="list-disc pl-5">
                  {aiResponse.recommendations.map((rec, index) => (
                    <li key={index} className="text-justify text-purple-900 text-sm">{rec.recommendation}</li>
                  ))}
                </ul>
              ) : (
                <p>No recommendations available.</p>
              )}

              <h2 className="text-lg font-bold md:text-xl">Self Checkup Steps</h2>
              <p className="text-purple-900 text-justify text-sm">{aiResponse.selfCheck}</p>
            </div>

            <div className="flex justify-center m-6 mt-2">
              <Button onClick={() => {setShowAiResponse(false); setShowForm(true)}} className="mt-6 bg-[#4c2882] text-white w-full py-3">Retake</Button>
            </div>
          </div>}
  
        {showForm && <CardContent>
          <form  onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="age">Enter Age</Label>
                <input id="age-input" placeholder="20" type="number" 
                onChange={(e) => setAge(e.target.value)}
                aria-describedby="helper-text-explanation" 
                className="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" 
                required 
                min={12} 
                max={110} 
                />
              </div>
              <div className="flex flex-col space-y-2.5">
                <Textarea className="text-sm min-h-40 max-h-80 lg:min-h-20 lg:text-md" placeholder="Enter any symptoms, relevant genetic history or other related aspects for the most accurate assessment." onChange={(e) => setMessage(e.target.value)} />
              </div>
            </div>
          <Button type="submit" className="mt-6 bg-[#4c2882] text-white w-full py-3">View Prediction</Button>
          </form>
        </CardContent> }
        </Card> 
    )
  }
  