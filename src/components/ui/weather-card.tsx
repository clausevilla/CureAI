import { CircleArrowUp, Sun } from "lucide-react";

export default function WeatherCard({uvIndex}: {uvIndex: number}) {
  const getUvMessage = () => {
    if(uvIndex < 3){
      <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>
        return "Low risk of sun exposure damage";
      </p>
    } else if(uvIndex < 6){
      <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>
        return "Moderate risk of sun damage";
      </p>
    } else if(uvIndex < 8){
      <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>
        return "High risk of sun exposure, wear sunscreen!";
      </p>
    } else if(uvIndex < 11){
      <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>
        return "Very high high risk, stay inside!";
      </p>
    } 
  };

  return (
    <div className="relative flex size-52 flex-col rounded-3xl bg-opacity-10 bg-gradient-to-r from-yellow-50 to-yellow-100 bg-clip-padding p-4 backdrop-blur-sm backdrop-filter">
      <div className="flex flex-1 flex-col gap-2">
        <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>Current UV</p>
        <div className="flex items-center">
          <Sun className="h-10 w-10" style={{ color: "#4c2882" }} />
          <p className="inline-flex whitespace-pre-wrap text-5xl font-bold" style={{ color: "#4c2882" }}>
             {uvIndex}
          </p>
          </div>
          <div>
          {(uvIndex < 3) && <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>Low UV</p>}
          {(uvIndex >= 3 && uvIndex < 6) && <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>Moderate UV</p>}
          {(uvIndex >= 6 && uvIndex < 8) && <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>High UV</p>}
          {(uvIndex >= 8 && uvIndex < 11) && <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>Very High UV</p>}
          {(uvIndex >= 11) && <p>Extreme UV</p>}
          </div>
      </div>   
    </div>
  );
}
