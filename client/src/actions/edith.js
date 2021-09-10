export const activate = () => {
    return { type: "ACTIVATE" };
};

export const greet = () => {
    return { type: "GREET" };
}

export const speak = (text) => {
    return { 
        type: "SPEAK", 
        payload: {
            text: text
        } 
    };
};


export const setData = (data) => {
    return { 
        type: "SET_DATA", 
        payload: {
            data: data 
        }
    } 
};

export const idle = () => {
    return { type: "IDLE" }; 
};

export const incr = () => {
    return { type: "INCR_TIME" }; 
};

export const animOut = () => {
    return { type: "ANIM_OUT" }; 
};

export const incrErr = () => {
    return { type: "INCR_ERR" };
};

export const reset = () => {
    return { type: "RESET" };
};