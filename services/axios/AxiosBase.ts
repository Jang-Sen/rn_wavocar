import axios from 'axios';
import appConfig from "@/config/app.config";

const AxiosBase = axios.create({
    baseURL: appConfig.apiPrefix,
    timeout: 60000,
});

export default AxiosBase;
