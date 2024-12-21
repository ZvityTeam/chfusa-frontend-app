const ApiCalling = async (url, type, data = "") => {
  url = process.env.REACT_APP_API_PREFIX + url;
  const myHeaders = new Headers();
  const token = sessionStorage.getItem("accessToken");
  if (type === "FILE") {
    // myHeaders.append("Content-Type", "multipart/form-data");
  } else {
    myHeaders.append("Content-Type", "application/json");
  }
  myHeaders.append("token", token);
  if (type === "POST") {
    const response = await fetch(url, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
    });
    SessionActiveOrNot(response);
    return response.json();
  } else if (type === "FILE") {
    const response = await fetch(url, {
      method: "POST",
      headers: myHeaders,
      body: data,
    });
    SessionActiveOrNot(response);
    return response.json();
  } else {
    const response = await fetch(url, {
      method: "GET",
      headers: myHeaders,
    });
    SessionActiveOrNot(response);
    return response.json();
  }
};


const SessionActiveOrNot = (response) => {
  if (response.status === 401) {
    // Clear local storage
    sessionStorage.clear();
    // Redirect to / route
    window.location = "/"
    // You can also return a specific error message or handle other actions as needed
    return { error: "Session expired. Please log in again." };
  }
};
export default ApiCalling;
