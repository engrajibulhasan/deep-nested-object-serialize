// Checking is Object
const isObject = (o) => {
    return o instanceof Object && o.constructor === Object;
}

export default isObject;