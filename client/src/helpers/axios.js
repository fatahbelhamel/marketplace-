import axios from "axios";
import { api } from "../urlConfig.js";

const axiosInstanse = axios.create({
  baseURL: api
});

export default axiosInstanse;
 