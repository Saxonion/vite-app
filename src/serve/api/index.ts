import http from "../api.ts";

export const loginApi = (data) => http.post("/login", data);