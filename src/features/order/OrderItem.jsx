/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utilities/helpers.jss";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
	const { quantity, name, totalPrice } = item;

	return (
		<li>
			<div>
				<p>
					<span>{quantity}&times;</span> {name}
				</p>
				<p>{formatCurrency(totalPrice)}</p>
			</div>
		</li>
	);
}

export default OrderItem;
