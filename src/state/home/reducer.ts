import { actionTypes } from './action';

export interface IPriceData {
    USD: number | 0,
    USD_MARKET_CAP: number | 0,
    USD_24H_VOL: number | 0,
    USD_24H_CHANGE: number | 0
}

export interface HomeState {
    networkStatus: boolean | null,
    coinPrice: IPriceData
}

export const initialState: HomeState = {
    networkStatus: false,
    coinPrice: {
        USD: 0,
        USD_MARKET_CAP: 0,
        USD_24H_VOL: 0,
        USD_24H_CHANGE: 0
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_COIN_PRICE_SUCCESS:
            return {
                ...state,
                ...{ coinPrice: action.payload },
            }
        default:
            return state;

    }
}

export default reducer;