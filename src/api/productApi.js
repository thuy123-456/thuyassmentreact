import http from "./axiosHttp";

const getAll = () => {
    return http.get("/product");
};

const get = id => {
    return http.get(`/product/${id}`);
};

const create = data => {
    return http.post("/product", data);
};

const update = (id, data) => {
    return http.put(`/product/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/product/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};