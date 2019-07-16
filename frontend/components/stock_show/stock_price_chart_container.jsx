import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StockPriceChart from './stock_price_chart';
import { storePrices } from '../../actions/stock_actions';


const mSP = ({ entities }) => ({
	stock: entities.stocks[entities.search],
	prices: entities.prices,
});

const mDP = dispatch => ({
	setPrices: period => dispatch(storePrices(period)),
});

export default withRouter(connect(mSP, mDP)(StockPriceChart));