const stringToArray = (str) => {
    const keys = str.split('_');
    keys.shift();// Removing first index 
    return keys;
}

export default stringToArray;