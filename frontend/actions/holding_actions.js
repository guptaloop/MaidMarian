import * as HoldingApiUtil from '../util/holding_api_util';
import { receiveErrors } from "../util/session_api_util";

export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS";

export const receiveHoldings = holdings => ({
	type: RECEIVE_HOLDINGS,
	holdings
});

export const fetchHoldings = (user_id) => dispatch => (
	HoldingApiUtil.fetchHoldings(user_id).then(
		holdings => dispatch(receiveHoldings(holdings)))
);

export const updateHolding = (holding_id, user_id, shares) => dispatch => (
	HoldingApiUtil.updateHolding(holding_id, user_id, shares).then(
		holdings => dispatch(receiveHoldings(holdings))),
		errors => (dispatch(receiveErrors(errors.responseJSON)))
);

export const createHolding = (user_id, symbol, shares, price) => dispatch => (
	HoldingApiUtil.createHolding(user_id, symbol, shares, price).then(
		holdings => dispatch(receiveHoldings(holdings))),
		errors => (dispatch(receiveErrors(errors.responseJSON)))
);

export const destroyHolding = (holding_id, user_id) => dispatch => (
	HoldingApiUtil.destroyHolding(holding_id, user_id).then(
		holdings => dispatch(receiveHoldings(holdings))),
		errors => (dispatch(SessionUtil.receiveErrors(errors.responseJSON)))
);