import isObject from "./isObject";

const getKeyArray = (data) => {
    if (Array.isArray(data)) {
        return Object.keys(data[0]);
    } else if (isObject(data)) {
        return Object.keys(data)
    }
    return data;
}

export default getKeyArray;