import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
	createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;

// //// Sophisticated way to remove logger from prod (so you don't have to remove it before every heroku push)

// const configureStore = (preloadedState = {}) => {
// 	let middleware = [thunk];
// 	if (process.env.NODE_ENV !== 'production') {
// 		middleware = [...middleware, logger];
// 	}
// 	return createStore(
// 		rootReducer,
// 		preloadedState,
// 		applyMiddleware(...middleware)
// 	);
// };