import isKeyExists from "./isKeyExists";
import stringToArray from "./stringToArray";




const isInTheState = (root, obj) => {
    const keys = stringToArray(root);
    switch (keys.length) {
        case 1:
            return isKeyExists(obj, keys[0]);
        case 2:
            return isKeyExists(obj, keys[0]) && isKeyExists(obj[keys[0]], keys[1]);
        case 3:
            return isKeyExists(obj, keys[0]) && isKeyExists(obj[keys[0]], keys[1]) && isKeyExists(obj[keys[0]][keys[1]], keys[2]);
        case 4:
            return isKeyExists(obj, keys[0]) && isKeyExists(obj[keys[0]], keys[1]) && isKeyExists(obj[keys[0]][keys[1]], keys[2]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]], keys[3]);
        case 5:
            return isKeyExists(obj, keys[0]) && isKeyExists(obj[keys[0]], keys[1]) && isKeyExists(obj[keys[0]][keys[1]], keys[2]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]], keys[3]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]][keys[3]], keys[4]);
        case 6:
            return isKeyExists(obj, keys[0]) && isKeyExists(obj[keys[0]], keys[1]) && isKeyExists(obj[keys[0]][keys[1]], keys[2]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]], keys[3]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]][keys[3]], keys[4]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]], keys[5]);
        case 7:
            return isKeyExists(obj, keys[0]) && isKeyExists(obj[keys[0]], keys[1]) && isKeyExists(obj[keys[0]][keys[1]], keys[2]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]], keys[3]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]][keys[3]], keys[4]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]], keys[5]) && isKeyExists(obj[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]][keys[5]], keys[6]);

        default:
            return false;
    }
}

export default isInTheState;