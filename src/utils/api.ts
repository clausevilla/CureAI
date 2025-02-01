import axios from 'axios';

const baseURL = 'http://localhost:3001';

interface LifestyleData {
    sex: string;
    age: number;
    city: string;
    job: string;
    smoker: boolean;
    passiveSmoker: boolean;
    alcohol: boolean;
    physicalActivity: string;
    sunExposure: string;
    geneticHistory: string[];
}

export const sendLifestyleMessage = async (data: LifestyleData): Promise<string> => {
    try {
        const response = await axios.post(`${baseURL}/lifestyle`, data);
        return response.data.message;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'An error occurred while sending the lifestyle message');
    }
};