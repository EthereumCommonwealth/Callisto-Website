export const actionTypes = {
    GET_COIN_PRICE: "GET_COIN_PRICE",
    GET_COIN_PRICE_SUCCESS: "GET_COIN_PRICE_SUCCESS",
}

export function getCoinPrice() {
    return { type: actionTypes.GET_COIN_PRICE }
}

export function getCoinPriceSuccess(payload) {
    return { type: actionTypes.GET_COIN_PRICE_SUCCESS, payload }
}