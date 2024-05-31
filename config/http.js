import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import storage from "./storage";


export const axiosAprovaApi = axios.create({
  baseURL: "http://localhost:3333",
});

axiosAprovaApi.interceptors.request.use(

  (config) => {
    console.log(storage.load({ key: 'access-token' }))

    storage.load({ key: 'access-token' })
      .then(ret => {
        config.headers["Authorization"] = ret
      })
      .catch(() => config.headers["Authorization"] = "")

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAprovaApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status == 403) {
      const navigation = useNavigation();
      return navigation.navigate("Login");
    } else {
      return Promise.reject(error);
    }
  }
);
