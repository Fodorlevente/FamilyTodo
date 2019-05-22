import axios from "axios";

export const getList = () => {
  return axios
    .get(":"+process.env.PORT+"/api/tasks", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
};

export const addToList = term => {
  return axios
    .post(
      "0.0.0.0:"+process.env.PORT+"/api/task",
      {
        title: term,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};

export const deleteItem = term => {
  axios
    .delete(`0.0.0.0:"+process.env.PORT+"/api/task/${term}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateItem = (term, id) => {
  return axios
    .put(
      `0.0.0.0:"+process.env.PORT+"/api/task${id}`,
      {
        title: term,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};
