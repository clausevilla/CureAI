import { CircleArrowUp, Sun } from "lucide-react";

export default function WeatherCard() {
  return (
    <div className="relative flex size-52 flex-col rounded-3xl bg-opacity-10 bg-gradient-to-r from-yellow-50 to-yellow-100 bg-clip-padding p-4 backdrop-blur-sm backdrop-filter">
      <div className="flex flex-1 flex-col gap-2">
        <p className="inline-flex whitespace-pre-wrap text-lg font-bold" style={{ color: "#4c2882" }}>Optimal UV</p>
        <div className="flex items-center">
          <Sun className="h-10 w-10" style={{ color: "#4c2882" }} />
          <p className="inline-flex whitespace-pre-wrap text-5xl font-bold" style={{ color: "#4c2882" }}>19&deg;</p>
        </div>
        <p className="inline-flex whitespace-pre-wrap text-m" style={{ color: "#4c2882" }}>Advised by;</p>
      </div>
      <div className="flex justify-between rounded-xl bg-gray-400 bg-opacity-30 bg-clip-padding py-1 backdrop-blur-lg backdrop-filter">
        <div className="flex items-center gap-1 px-2 text-orange-500">
          <CircleArrowUp className="h-5 w-5" />
          24&deg;
        </div>
        <p className="text-black opacity-50">|</p>
        <div className="flex items-center gap-1 px-3 text-green-800 dark:text-green-200">
          <CircleArrowUp className="h-5 w-5 rotate-180" />
          9&deg;
        </div>
      </div>
    </div>
  );
}
