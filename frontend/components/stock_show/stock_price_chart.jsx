import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

class StockPriceChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			period: 5.0,
			prices: []
		};
		this.getHistoricalPrices = this.getHistoricalPrices.bind(this);
	}

	componentWillMount() {
		this.state.prices = this.getHistoricalPrices();
	}

	getHistoricalPrices() {
		let year = 298;
		let period = this.state.period;
		let prices = [];

		while (period > 0) {
			let priceObj = {
				date: year,
				price: (((Math.random() + 0.005) * 1000)).toFixed(2)
			};

			prices.unshift(priceObj);
			year--;
			period -= 0.5;
		}
		return prices;
	}

	render() {
		const priceChart = (
			<div className="price-chart-div">
				<header className="price-chart-text">{this.props.stock.name}</header>
				<h2 className="price-chart-text">{this.state.prices.slice(-1)[0].price}</h2>
				<LineChart width={600} height={400} data={this.state.prices}>
					<XAxis dataKey="date" hide={true} />
					<YAxis dataKey="price" hide={true} />
					<Line type="monotone" dataKey="price" stroke="#f45531" dot={false} />
				</LineChart>
			</div>
		);

		return (priceChart);
	}
}

export default StockPriceChart;