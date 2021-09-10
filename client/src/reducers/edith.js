import states from '../objects/states.json';

const defaultState = {
    activated: false,
    speaking: false,
    text: "",
    time: 0,
    errCount: 0,
    animOut: false,
    data: {}
};

const greetMessage = states.states[0];

export default function edith(state = defaultState, action) {
    switch (action.type) {
        case "ACTIVATE":
            return { ...state, activated: true };

        case "GREET":
            return { ...state, text: greetMessage, speaking: true };

        case "SPEAK":
            return { ...state, text: action.payload.text, speaking: true };

        case "IDLE":
            return { ...state, speaking: false };

        case "SET_DATA":
            return { ...state, data: { ...state.data, ...action.payload.data } };

        case "INCR_TIME":
            return { ...state, time: state.time + 1, animOut: false };

        case "ANIM_OUT":
            return { ...state, animOut: true };

        case "INCR_ERR":
            return { ...state, errCount: state.errCount + 1 };

        case "RESET":
            return { ...state, time: 0 };
        
        default:
            return state;
    }
};