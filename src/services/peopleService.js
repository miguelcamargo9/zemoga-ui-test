import axios from "axios";

export const getAllPeople = () => {
  const API_ENDPOINT = `./static/data/data.json`;
  const CancelToken = axios.CancelToken;
  return axios
    .get(API_ENDPOINT, {
      cancelToken: new CancelToken(function executor(cancel) {
        const dataPeople = localStorage.getItem("dataPeople");
        if (dataPeople) {
          const returnData = {
            data: {
              people: JSON.parse(dataPeople)
            }
          };
          cancel(returnData);
        }
      })
    })
    .then(response => {
      const dataJson = JSON.stringify(response.data.people);
      localStorage.setItem("dataPeople", dataJson);
      return response;
    })
    .catch(function(result) {
      if (axios.isCancel(result)) {
        return result.message;
      }
      console.log(result);
    });
};

export const savePoints = (newPoints, vote, id) => {
  return new Promise((resolve, reject) => {
    try {
      let dataPeople = JSON.parse(localStorage.getItem("dataPeople"));
      const index = dataPeople.findIndex(person => person.id === id);

      if (vote === "like") dataPeople[index].likepoints = newPoints;
      else dataPeople[index].dislikepoints = newPoints;

      localStorage.setItem("dataPeople", JSON.stringify(dataPeople));
      resolve({ status: "ok", message: "Registro Guardado con Exito" });
    } catch (error) {
      reject(error);
    }
  });
};
