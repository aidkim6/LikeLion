import axios from "axios";

const instance = axios.create({
    baseURL: "https://69f9d3d7c509a40d3aa363af.mockapi.io/api/v1/likelion"
});

const trainInstance = axios.create({
    baseURL: "https://api.odcloud.kr/api"
});

export const signup = (data) => {
    return instance.post("/user", data);
};

export const getSRTrainData = (page = 1, perPage = 50) => {
    return trainInstance.get("/15081920/v1/uddi:3c6dc8fe-cc30-4f7f-8a14-e012fde7ea52", {
        params: {
            page: page,
            perPage: perPage,
            serviceKey: "7f7d7ea9dfc359da6b70e7763a579174b75c44d71f98dbe7396ed4e18b1666c6"
        }
    });
};