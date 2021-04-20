import { all, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { coingecko_url } from 'constants/config';
import { endpoints } from 'constants/endpoints';
import { actionTypes, getCoinPriceSuccess } from './action';


function* getCoinPrice() {
    try {
        const res = yield call(axios.get, coingecko_url + endpoints.GETCOINPRICE);
        if( res.status === 200 ) {
            yield put(getCoinPriceSuccess(res.data.callisto));
        }
    } catch(err) {
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_COIN_PRICE, getCoinPrice)]);
}