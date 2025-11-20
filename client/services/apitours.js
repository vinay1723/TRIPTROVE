import axios from "axios";

export async function getAllTours() {
  try {
    const res = await axios({
      method: "GET",
      // url: `http://localhost:3000/api/v1/tours/alltours`,
      url: `https://triptrove-ergy.onrender.com/api/v1/tours/alltours`,
    });

    return res.data.data.allDocs;
  } catch (error) {
    console.log(error);
  }
}

export async function signup(user) {
  try {
    const res = await axios({
      method: "POST",
      // url: `http://localhost:3000/api/v1/user/signup`,
      url: `https://triptrove-ergy.onrender.com/api/v1/user/signup`,
      data: user,
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export async function login(user) {
  try {
    const res = await axios({
      method: "POST",
      // url: `http://localhost:3000/api/v1/user/login`,
      url: `https://triptrove-ergy.onrender.com/api/v1/user/login`,
      data: user,
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function logout() {
  try {
    const res = await axios({
      method: "GET",
      // url: "http://localhost:3000/api/v1/user/logout",
      url: `https://triptrove-ergy.onrender.com/api/v1/user/logout`,
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err.response);
    // showAlert("error", "Error logging out! try again");
  }
}

export async function updateSettings(user, data) {
  try {
    const res = await axios({
      method: "PATCH",
      // url:
      //   data === "password"
      //     ? `http://localhost:3000/api/v1/user/updateMyPassword`
      //     : `http://localhost:3000/api/v1/user/updateMe`,
      url:
        data === "password"
          ? `https://triptrove-ergy.onrender.com/api/v1/user/updateMyPassword`
          : `https://triptrove-ergy.onrender.com/api/v1/user/updateMe`,
      data: user,
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchImage(photo) {
  try {
    // const res = await axios.get(`http://localhost:3000/api/image/${photo}`, {
    //   responseType: "blob",
    // });
    const res = await axios.get(
      `https://triptrove-ergy.onrender.com/api/image/${photo}`,
      {
        responseType: "blob",
      }
    );
    const imageBlob = res.data;
    const imageObjectURL = URL.createObjectURL(imageBlob);
    return imageObjectURL;
  } catch (error) {
    console.error("Error fetching the image:", error);
    // setError("Error fetching the image");
  }
}

export async function BookTours(tourId, userId, Price) {
  try {
    const res = await axios({
      method: "GET",
      // url: `http://localhost:3000/?tour=${tourId}&user=${userId}&price=${Price}`,
      url: `https://triptrove-ergy.onrender.com/?tour=${tourId}&user=${userId}&price=${Price}`,
      withCredentials: true,
    });

    return res;
  } catch (err) {
    console.log(err.response);
    // showAlert("error", "Error logging out! try again");
  }
}

export async function fetchBookTours(userId) {
  try {
    const res = await axios({
      method: "GET",
      // url: `http://localhost:3000/${userId}`,
      url: `https://triptrove-ergy.onrender.com/${userId}`,
      withCredentials: true,
    });

    return res;
  } catch (err) {
    console.log(err.response);
    // showAlert("error", "Error logging out! try again");
  }
}

// `${req.protocol}://${req.get("host")}/?tour=${req.params.tourId}&user=${
//   req.user.id
// }&price=${tour.price}`;

export async function getRecommendedTours() {
  try {
    const tours = await axios({
      method: "GET",
      // url: "http://localhost:3000/api/v1/recommend/tours",
      url: "https://triptrove-ergy.onrender.com/api/v1/recommend/tours",
      withCredentials: true,
    });

    return tours.data.data;
  } catch (e) {
    console.log(e);
  }
}

export async function Top5tours() {
  try {
    const tours = await axios({
      method: "GET",
      // url: "http://localhost:3000/api/v1/tours/top-5-cheap",
      url: "https://triptrove-ergy.onrender.com/api/v1/tours/top-5-cheap",
      withCredentials: true,
    });
    console.log(tours);
    return tours;
  } catch (e) {
    console.log(e);
  }
}
