import axios from 'axios';

const baseURL = 'http://localhost:3001';
const WEATHERAPI_KEY = process.env.WEATHERAPI_KEY;

export interface WeatherData {
    temperature: {
        min: number;
        max: number;
    };
    daily: {
        uvIndex: number;
    };
}
