import axios from "axios";
import CONST from "../../utils/contants";

const config = {
	baseURL: CONST.BASE_URL_API,
    headers: {
        "x-hasura-admin-secret": CONST.KEY_ID_API
    }
};

const axiosInstance = axios.create(config);

export default axiosInstance;
