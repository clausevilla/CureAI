import axios from 'axios';

const baseURL = 'https://cureai-backend.onrender.com';

export interface LifestyleData {
    sex: string;
    age: number;
    smoker: number;
    alcohol: number;
    physicalActivity: number;
    airPollution: number;
    sunExposure: number;
    passiveSmoker: boolean;
    geneticHistory: string;
    city: string;

}

export const sendLifestyleMessage = async (data: LifestyleData): Promise<string> => {
    try {
        const response = await axios.post(`${baseURL}/lifestyle`, data);
        return response.data.message;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'An error occurred while sending the lifestyle message');
    }
};

export interface CancerTypeData {
    age: number;
    message: string;
    cancerType: string;
}

export const sendCancerTypeMessage = async (data: CancerTypeData): Promise<string> => {
    try {
        const response = await axios.post(`${baseURL}/cancer`, data);
        return response.data.message;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'An error occurred while sending the message for cancer type');
    }
};

