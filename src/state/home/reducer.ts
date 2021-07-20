import { createReducer } from '@reduxjs/toolkit';
import { actionTypes } from './action';


export interface IPriceData {
    usd: number | 0,
    usd_market_cap: number | 0,
    usd_24h_vol: number | 0,
    usd_24h_change: number | 0
}

export interface HomeState {
    networkStatus: boolean | null,
    coinPrice: IPriceData
}

export const initialState: HomeState = {
    networkStatus: false,
    coinPrice: {
        usd: 0,
        usd_market_cap: 0,
        usd_24h_vol: 0,
        usd_24h_change: 0
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