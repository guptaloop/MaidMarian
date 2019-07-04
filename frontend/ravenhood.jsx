import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { receiveStock, fetchStock, RECEIVE_STOCK } from './actions/stock_actions';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	let preLoadedState = undefined;
	
	if (window.currentUser) {
		preLoadedState = {
			session: { currentUserId: window.currentUser.id	},
			entities: { users: { [window.currentUser.id]: window.currentUser } }
		};
	}
	
	const store = configureStore(preLoadedState);
	delete window.currentUser;
	
	ReactDOM.render(<Root store={store}/>, root);
});