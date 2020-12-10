import http from "../api";

export const loginApi = (data: Object) => http.post("/login", data);