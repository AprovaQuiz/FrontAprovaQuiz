import axios from "axios";
import storage from "./storage";
import { navigationRef } from "./RootNavigation";

export const axiosAprovaApi = axios.create({
  baseURL: "https://aprovaquiz-rest-api-production.up.railway.app/",
});

axiosAprovaApi.interceptors.request.use(

  async (config) => {

    await storage.load({ key: 'access-token' })
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

      if (navigationRef.isReady()) {
        alert('Token Inválido ou Expirado\n Faça Login Novamente')
        return navigationRef.navigate('Login');

      }
    } else {
      return Promise.reject(error);
    }
  }
);
