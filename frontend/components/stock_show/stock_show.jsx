import React from 'react';
import { LoadingBar } from '../loading_bar';
import NavBarContainer from '../nav_bar/nav_bar_container';
import StockPriceChart from './stock_price_chart';
import { StockInfo } from './stock_info';
import NewsFeedContainer from './news_feed_container';
import StockOrderFormContainer from './stock_order_form_container';

export default class StockShowPage extends React.Component {
	constructor(props) {
		super(props);
	}

	// auto-invoked after the render (which shows the LOADING element), then will auto-render the component once the fetchStock dispatch completes.
	componentDidMount() {
		const symbol = this.props.match.params.symbol;
		this.props.fetchStock(symbol);
	}

	render() {
		if (!this.props.stock) { return (<LoadingBar />) }

		return (
			<div className="stock-show">
				<NavBarContainer />
				<div className="stock-show-main-div">
					<div className="stock-show-left-column">
						<StockPriceChart stock={this.props.stock} />
						<StockInfo stock={this.props.stock} />
						<NewsFeedContainer stock={this.props.stock} />
					</div>
					<div className="stock-show-right-column">
						<StockOrderFormContainer />
					</div>
				</div>
			</div>
		);
	}
};