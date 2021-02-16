const API_URL = "http://ruppinmobile.tempdomain.co.il/site03/";

export const getPlaces = async () => {
  const results = await fetch(API_URL + "api/place").then((x) => x.json());
  return results;
};

export const getAllUsers = async () => {
  const results = await fetch(API_URL + "api/user").then((x) => x.json());
  return results;
};
export const getUsersInPlaces = async () => {
  const results = await fetch(API_URL + "api/usersinplaces").then((x) =>
    x.json()
  );
  return results;
};
export const getMessages = async () => {
  const results = await fetch(API_URL + "api/message").then((x) => x.json());
  return results;
};

export const getLikes = async () => {
  const results = await fetch(API_URL + "api/like").then((x) => x.json());
  return results;
};

export const getMatches = async () => {
  const results = await fetch(API_URL + "api/match").then((x) => x.json());
  return results;
};
export const addPlace = async (
  id,
  name,
  address,
  area,
  latitude,
  longitude,
  about,
  photo,
  logo,
  likes
) => {
  let returnedObj = null;
  
  await fetch(
    API_URL +
      `api/place?id=${id}&name=${name}&address=${address}&area=${area}&latitude=${latitude}&longitude=${longitude}&about=${about}&photo=${photo}&logo=${logo}&likes=${likes}`,
    {
      method: "GET", // 'GET', 'POST', 'PUT', 'DELETE', etc.
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    }
  ) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      console.log("after", data);
      if (
        data !== `place with id = ${id}  does'nt created in DB!!!` &&
        data !== `place exist in db !!!!!`
      ) {
        returnedObj = data;
      } else {
        returnedObj = null;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  return returnedObj;
};
export const imageUpload = async (imgUri, picName) => {
  let url;
  let urlAPI = API_URL + "uploadpicture";
  let dataI = new FormData();
  dataI.append(picName, imgUri, picName + ".jpg");
  const config = {
    method: "POST",
    body: dataI,
  };

  await fetch(urlAPI, config)
    .then((res) => {
      console.log("res.status= ", res.status);
      if (res.status === 201) {
        return res.json();
      } else {
        console.log("error uploading with status= ", res.status);
        return "err";
      }
    })
    .then((responseData) => {
      console.log(responseData);
      if (responseData !== "err") {
        let picNameWOExt = picName.substring(0, picName.indexOf("."));
        let imageNameWithGUID = responseData.substring(
          responseData.indexOf(picNameWOExt),
          responseData.indexOf(".jpg") + 4
        );
        url =
          "http://185.60.170.14/plesk-site-preview/" +
          imageNameWithGUID.split("http://")[1].replace(" ", "%20");
        console.log("img uploaded successfully!");
      } else {
        console.log("error uploading ...");
        alert("error uploading");
      }
    })
    .catch((err) => {
      alert("err upload= " + err);
    });
  return url;
};
