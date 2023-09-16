import axios from "axios";

const intances = axios.create({
  baseURL: 'http://localhost:3000'
});
export default intances