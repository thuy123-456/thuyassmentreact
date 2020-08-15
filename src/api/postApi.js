import http from "./axiosHttp";

const getAll = () => {
    return http.get("/post");
};

const get = id => {
    return http.get(`/post/${id}`);
};

const create = data => {
    return http.post("/post", data);
};

const update = (id, data) => {
    return http.put(`/post/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/post/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};