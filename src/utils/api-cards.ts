import axios from 'axios';

const baseURL = 'http://localhost:3001';

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
