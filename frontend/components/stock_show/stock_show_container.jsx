import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockShowPage from './stock_show';
import { fetchStock, fetchWatchlist } from '../../actions/stock_actions';


const mSP = ({ entities }) => ({
	stock: entities.stocks[entities.search],
	watchlist: entities.watchlist,
	userId: entities.currentUser,
});

const mDP = dispatch => ({
	fetchStock: symbol => dispatch(fetchStock(symbol)),
	fetchWatchlist: user_id => dispatch(fetchWatchlist(user_id))
});

export default withRouter(connect(mSP, mDP)(StockShowPage));