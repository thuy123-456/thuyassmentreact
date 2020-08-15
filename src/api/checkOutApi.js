import http from "./axiosHttp";

const getAll = () => {
    return http.get("/checkOut");
};

const get = id => {
    return http.get(`/checkOut/${id}`);
};

const create = data => {
    return http.post("/checkOut", data);
};

const update = (id, data) => {
    return http.put(`/checkOut/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/checkOut/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};