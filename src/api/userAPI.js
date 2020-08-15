import http from "./axiosHttp";

const getAll = () => {
    return http.get("/user");
};

const create = data => {
    return http.post("/category", data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/user/${id}`);
};


export default {
    getAll,
    create,
    remove,
};