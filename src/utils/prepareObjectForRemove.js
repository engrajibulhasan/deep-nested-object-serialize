import isObject from "./isObject";

const isDeletable = (key) => {
    const length = Object.keys(key).length;
    return isObject(key) && length > 1 ? false : true
}


const prepareObjectForRemove = (state, keys, item) => {

    switch (keys.length) {
        case 1:
            delete state[keys[0]]
            return { ...state }
        case 2:
            isDeletable(state[keys[0]]) ? delete state[keys[0]] : delete state[keys[0]][keys[1]]
            return { ...state }
        case 3:

            isDeletable(state[keys[0]]) ? delete state[keys[0]] : isDeletable(state[keys[0]][keys[1]]) ? delete state[keys[0]][keys[1]] : delete state[keys[0]][keys[1]][keys[2]]
            return { ...state }

        case 4:

            isDeletable(state[keys[0]]) ? delete state[keys[0]] : isDeletable(state[keys[0]][keys[1]]) ? delete state[keys[0]][keys[1]] : isDeletable(state[keys[0]][keys[1]][keys[2]]) ? delete state[keys[0]][keys[1]][keys[2]] : delete state[keys[0]][keys[1]][keys[2]][keys[3]]
            return { ...state }

        case 5:

            isDeletable(state[keys[0]]) ? delete state[keys[0]] : isDeletable(state[keys[0]][keys[1]]) ? delete state[keys[0]][keys[1]] : isDeletable(state[keys[0]][keys[1]][keys[2]]) ? delete state[keys[0]][keys[1]][keys[2]] : isDeletable(state[keys[0]][keys[1]][keys[2]][keys[3]]) ? delete state[keys[0]][keys[1]][keys[2]][keys[3]] : delete state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]]
            return { ...state }

        case 6:
            console.log("case 6");
            isDeletable(state[keys[0]]) ? delete state[keys[0]] : isDeletable(state[keys[0]][keys[1]]) ? delete state[keys[0]][keys[1]] : isDeletable(state[keys[0]][keys[1]][keys[2]]) ? delete state[keys[0]][keys[1]][keys[2]] : isDeletable(state[keys[0]][keys[1]][keys[2]][keys[3]]) ? delete state[keys[0]][keys[1]][keys[2]][keys[3]] : isDeletable(state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]]) ? delete state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]] : delete state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]][keys[5]]
            return { ...state }

        case 7:
            console.log("case 7");
            isDeletable(state[keys[0]]) ? delete state[keys[0]] : isDeletable(state[keys[0]][keys[1]]) ? delete state[keys[0]][keys[1]] : isDeletable(state[keys[0]][keys[1]][keys[2]]) ? delete state[keys[0]][keys[1]][keys[2]] : isDeletable(state[keys[0]][keys[1]][keys[2]][keys[3]]) ? delete state[keys[0]][keys[1]][keys[2]][keys[3]] : isDeletable(state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]]) ? delete state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]] : isDeletable(state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]][keys[5]]) ? delete state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]][keys[5]] : delete state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]][keys[5]][keys[6]]
            return { ...state }

        default:
            return { ...state };
    }

}

export default prepareObjectForRemove;