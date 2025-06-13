import axios from "axios";

const API_URL = "http://localhost:5000/api/schedules";

export const getSchedules = async () => {
    return await axios.get(API_URL);
};

export const createSchedule = async (scheduleData) => {
    return await axios.post(API_URL, scheduleData);
};