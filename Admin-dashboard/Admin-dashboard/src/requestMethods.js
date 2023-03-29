import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2UxNDJiYjQ1M2U5ZjJlZTVkNGU5MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTI5MjQ4MSwiZXhwIjoxNjY5NTUxNjgxfQ.S9MJygVBrGxKJpEA3oYQt2r9nNnzHEALB78P_gF1FzQ";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
