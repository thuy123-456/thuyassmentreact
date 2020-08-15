import http from "./axiosHttp";

const getAll = () => {
    return http.get("/category_post");
};

const get = id => {
    return http.get(`/category_post/${id}`);
};

const create = data => {
    return http.post("/category_post", data);
};

const update = (id, data) => {
    return http.put(`/category_post/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/category_post/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};