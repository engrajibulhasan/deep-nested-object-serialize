import isKeyExists from "./isKeyExists";



const prepareObjectForAdd = (state, keys, item) => {
    const { children } = item
    console.log(children, "children");
    switch (keys.length) {
        case 1:
            return { ...state, [keys[0]]: children }
        case 2:
            console.log("2 Hitted");
            return isKeyExists(state, keys[0])
                ? {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: children
                    }
                }
                :
                {
                    ...state,
                    [keys[0]]: { [keys[1]]: children }
                }
        case 3:
            // If found, destructure that
            if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: children
                        }
                    }
                }
            } else if (isKeyExists(state, keys[0])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: { [keys[2]]: children }
                    }
                }
            } else {
                return {
                    ...state,
                    [keys[0]]: { [keys[1]]: { [keys[2]]: children } }
                }
            }

        case 4:
            // If found, destructure that
            if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: children
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: { [keys[3]]: children }
                        }
                    }
                }
            } else if (isKeyExists(state, keys[0])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: { [keys[2]]: { [keys[3]]: children } }
                    }
                }
            } else {
                return {
                    ...state,
                    [keys[0]]: { [keys[1]]: { [keys[2]]: { [keys[3]]: children } } }
                }
            }

        case 5:
            // If found, destructure that
            if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2]) && isKeyExists(state[keys[0]][keys[1]][keys[2]], keys[3])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: {
                                    ...state[keys[0]][keys[1]][keys[2]][keys[3]],
                                    [keys[4]]: children
                                }
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: { [keys[4]]: children }
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: { [keys[3]]: { [keys[4]]: children } }
                        }
                    }
                }
            } else if (isKeyExists(state, keys[0])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: { [keys[2]]: { [keys[3]]: { [keys[4]]: children } } }
                    }
                }
            } else {
                return {
                    ...state,
                    [keys[0]]: { [keys[1]]: { [keys[2]]: { [keys[3]]: { [keys[4]]: children } } } }
                }
            }
        case 6:
            // If found, destructure that
            if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2]) && isKeyExists(state[keys[0]][keys[1]][keys[2]], keys[3]) && isKeyExists(state[keys[0]][keys[1]][keys[2]][keys[3]], keys[4])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: {
                                    ...state[keys[0]][keys[1]][keys[2]][keys[3]],
                                    [keys[4]]: {
                                        ...state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]],
                                        [keys[5]]: children
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2]) && isKeyExists(state[keys[0]][keys[1]][keys[2]], keys[3])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: {
                                    ...state[keys[0]][keys[1]][keys[2]][keys[3]],
                                    [keys[4]]: {
                                        [keys[5]]: children
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: { [keys[4]]: { [keys[5]]: children } }
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: { [keys[3]]: { [keys[4]]: { [keys[5]]: children } } }
                        }
                    }
                }
            } else if (isKeyExists(state, keys[0])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: { [keys[2]]: { [keys[3]]: { [keys[4]]: { [keys[5]]: children } } } }
                    }
                }
            } else {
                return {
                    ...state,
                    [keys[0]]: { [keys[1]]: { [keys[2]]: { [keys[3]]: { [keys[4]]: { [keys[5]]: children } } } } }
                }
            }

        case 7:
            // If found, destructure that
            if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2]) && isKeyExists(state[keys[0]][keys[1]][keys[2]], keys[3]) && isKeyExists(state[keys[0]][keys[1]][keys[2]][keys[3]], keys[4]) && isKeyExists(state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]], keys[5])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: {
                                    ...state[keys[0]][keys[1]][keys[2]][keys[3]],
                                    [keys[4]]: {
                                        ...state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]],
                                        [keys[5]]: {
                                            ...state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]][keys[5]],
                                            [keys[6]]: children
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2]) && isKeyExists(state[keys[0]][keys[1]][keys[2]], keys[3]) && isKeyExists(state[keys[0]][keys[1]][keys[2]][keys[3]], keys[4])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: {
                                    ...state[keys[0]][keys[1]][keys[2]][keys[3]],
                                    [keys[4]]: {
                                        ...state[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]],
                                        [keys[5]]: {
                                            [keys[6]]: children
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2]) && isKeyExists(state[keys[0]][keys[1]][keys[2]], keys[3])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: {
                                    ...state[keys[0]][keys[1]][keys[2]][keys[3]],
                                    [keys[4]]: {
                                        [keys[5]]: {
                                            [keys[6]]: children
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1]) && isKeyExists(state[keys[0]][keys[1]], keys[2])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                ...state[keys[0]][keys[1]][keys[2]],
                                [keys[3]]: {
                                    [keys[4]]: {
                                        [keys[5]]: {
                                            [keys[6]]: children
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if (isKeyExists(state, keys[0]) && isKeyExists(state[keys[0]], keys[1])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            ...state[keys[0]][keys[1]],
                            [keys[2]]: {
                                [keys[3]]: {
                                    [keys[4]]: {
                                        [keys[5]]: {
                                            [keys[6]]: children
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (isKeyExists(state, keys[0])) {
                return {
                    ...state,
                    [keys[0]]: {
                        ...state[keys[0]],
                        [keys[1]]: {
                            [keys[2]]: {
                                [keys[3]]: {
                                    [keys[4]]: {
                                        [keys[5]]: {
                                            [keys[6]]: children
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    [keys[0]]: {
                        [keys[1]]: {
                            [keys[2]]: {
                                [keys[3]]: {
                                    [keys[4]]: {
                                        [keys[5]]: {
                                            [keys[6]]: children
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        default:
            return state;
    }

}

export default prepareObjectForAdd;