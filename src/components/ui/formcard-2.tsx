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
import { TextArea } from "@/components/ui/text-area-2"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { CancerTypeData, sendCancerTypeMessage } from "@/utils/api-cards";
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';


export function CardWithForm({title, description}) {
    const [showAiResponse, setShowAiResponse] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    
    //Input data
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [cancerType, setCancerType] = useState("");
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
    };
  
    //AI card response
    //Pass values into cancertypedata interface
    useEffect(() => {
      if (!submitClicked) return; // Avoid running on first render
  
      setShowLoading(true);
      setShowAiResponse(false);
  
      const cancerTypeData: CancerTypeData = {
        age: parseInt(age),
        message,
        cancerType};
  
        sendCancerTypeMessage(cancerTypeData)
        .then((response) => {
          setAiResponse(JSON.parse(response.content));
          setShowAiResponse(true);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setShowLoading(false);
          setSubmitClicked(false);
        });
    }, [submitClicked]);
    
    return (
      <Card className="lg:w-[350px]">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
  
          {/* loading panel */}
          {/* {showLoading && <div className="flex items-center justify-center h-full">
          <DotLottieReact src="https://lottie.host/ee9e5191-9319-432f-9122-5ebbedc65c17/PQtFPKPxiY.lottie"
          loop
          autoplay
          />
  
          </div> } */}
  
          {/* AI result */}
          {showAiResponse && <div hidden={!showAiResponse}>
            {/* In the same card, display a list of reasons why the specific cancer type is developed, and recommendations */}
            <div className="space-y-4 p-4">
              <h2 className="text-xl font-bold">Predicted Cancer Types</h2>
              {aiResponse.cancerTypes?.length > 0 ? (
                aiResponse.cancerTypes.map((item, index) => (
                  <Card key={index} className="p-4">
                    <CardContent>
                      <Badge className="text-lg mb-2">{item.type}</Badge>
                      <p className="text-gray-700">{item.reason}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p>No cancer types predicted.</p>
              )}
  
              <h2 className="text-xl font-bold">Recommendations</h2>
              {aiResponse.recommendations?.length > 0 ? (
                <ul className="list-disc pl-5">
                  {aiResponse.recommendations.map((rec, index) => (
                    <li key={index} className="text-gray-700">{rec.recommendation}</li>
                  ))}
                </ul>
              ) : (
                <p>No recommendations available.</p>
              )}
         </div>
            {/* retake button */}
            <div className="flex justify-center mt-8">
              <Button onClick={() => setShowAiResponse(false)} className="bg-[#4c2882] text-white w-full py-3">Retake</Button>
            </div>
          </div> }
  
  
        <CardContent>
          <form  onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="age">Enter Age</Label>
                <input id="age-input" placeholder="20" type="number" 
                onChange={(e) => setAge(e.target.value)}
                aria-describedby="helper-text-explanation" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                required 
                min={12} 
                max={110} 
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <TextArea />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="bg-[#4c2882] text-white w-full py-3" disabled>View Prediction (Soon)</Button>
        </CardFooter>
      </Card>
    )
  }
  