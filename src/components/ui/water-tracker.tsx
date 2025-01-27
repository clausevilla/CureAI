"use client";
import { useEffect, useState } from "react";
import { Droplet } from "lucide-react";

import { cn } from "@/lib/utils";

interface WaterTrackerProps {
  dailyGoal: number;
}

export default function WaterTracker({ dailyGoal = 3000 }: WaterTrackerProps) {
  const [waterIntake, setWaterIntake] = useState(0);

  useEffect(() => {
    setWaterIntake(0);
  }, []);

  const handleAddWater = () => {
    setWaterIntake((prevIntake) => {
      if (prevIntake + 250 <= dailyGoal) {
        return prevIntake + 250;
      }
      return prevIntake;
    });
  };

  const progress = (waterIntake / dailyGoal) * 100;

  return (
    <div className={cn("group relative flex size-52 rounded-3xl bg-opacity-10 bg-gradient-to-r from-blue-100 to-blue-200 backdrop-blur-sm backdrop-filter")}>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-center gap-1">
          <Droplet className="fill-blue-500 text-blue-500" size={22} />
          <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>Water</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <p className="inline-flex whitespace-pre-wrap text-4xl font-bold" style={{ color: "#4c2882" }}>{waterIntake}ml</p>
          <p className="inline-flex whitespace-pre-wrap text-m" style={{ color: "#4c2882" }}>Today</p>
        </div>
        <div className="mb-2 flex justify-center">
          <button
            onClick={handleAddWater}
            disabled={waterIntake >= dailyGoal}
            className={cn(
              "transform rounded-full bg-gradient-to-r px-6 py-2 text-sm font-semibold text-white",
              {
                "cursor-not-allowed from-gray-600 to-gray-500 opacity-80": waterIntake >= dailyGoal,
                "from-blue-500 to-blue-700 transition-transform hover:scale-105 hover:shadow-lg":
                  waterIntake < dailyGoal,
              },
            )}
          >
            +250 ml
          </button>
        </div>
      </div>

      <div className="relative flex w-10 flex-col items-end">
        <div className="absolute bottom-0 right-0 h-full w-10 overflow-hidden rounded-r-3xl bg-gray-400 bg-opacity-30 bg-clip-padding py-1 backdrop-blur-lg backdrop-filter">
          <div
            className={
              "absolute bottom-0 right-0 w-full bg-gradient-to-t from-blue-500 to-blue-700 transition-all duration-100 ease-out"
            }
            style={{
              height: `${progress}%`,
              "--progress-height": `${progress}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
