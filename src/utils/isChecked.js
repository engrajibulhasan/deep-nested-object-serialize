

// Is exists the Property in a object
const isExists = (obj, key) => {
    return obj.hasOwnProperty(key);
}

const isInTheState = (root, obj) => {
    const keys = root.split('_');
    keys.shift();// Removing first index 

    switch (keys.length) {
        case 1:
            return isExists(obj, keys[0]);
        case 2:
            return isExists(obj, keys[0]) && isExists(obj[keys[0]], keys[1]);
        case 3:
            return isExists(obj, keys[0]) && isExists(obj[keys[0]], keys[1]) && isExists(obj[keys[0]][keys[1]], keys[2]);
        case 4:
            return isExists(obj, keys[0]) && isExists(obj[keys[0]], keys[1]) && isExists(obj[keys[0]][keys[1]], keys[2]) && isExists(obj[keys[0]][keys[1]][keys[2]], keys[3]);
        case 5:
            return isExists(obj, keys[0]) && isExists(obj[keys[0]], keys[1]) && isExists(obj[keys[0]][keys[1]], keys[2]) && isExists(obj[keys[0]][keys[1]][keys[2]], keys[3]) && isExists(obj[keys[0]][keys[1]][keys[2]][keys[3]], keys[4]);

        default:
            return false;
    }
}

export default isInTheState;