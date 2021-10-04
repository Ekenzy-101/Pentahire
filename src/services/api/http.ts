import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API,
  withCredentials: true,
});
