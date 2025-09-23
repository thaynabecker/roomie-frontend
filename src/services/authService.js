import axios from "axios";

const API_URL = "http://localhost:8000/api/";

export async function login(username, password) {
  const response = await axios.post(API_URL + "token/", { username, password });
  if (response.data.access) {
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
  }
  return response.data;
}

export function getUserProfile() {
  return axios.get(API_URL + "profile/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`
    }
  });
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 6a62e93 (FIX: adjusting)
=======
}
>>>>>>> 3bc1e325ff0c826b96c52534a364df34d7236b32
