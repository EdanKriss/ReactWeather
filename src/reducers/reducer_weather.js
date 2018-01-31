import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log(action);
    switch (action.type) {
    case FETCH_WEATHER:
        // return state.concat([action.payload.data]);
        if (action.payload.data) {
            return [ action.payload.data, ...state ];
        } else {
            alert("The OpenWeatherMap API did not return a valid city, please enter only the city name (USA)");
            return state;
        }
    }
    return state;
}