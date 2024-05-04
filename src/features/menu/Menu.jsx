import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant.js";
import MenuItem from "./MenuItem";

function Menu() {
	const data = useLoaderData();
	// console.log(data);

	return (
		<ul>
			{data.map((pizza) => (
				<MenuItem
					pizza={pizza}
					key={pizza.id}
				/>
			))}
		</ul>
	);
}

// fetch the data from an api and return it
// then export the function and import it in the file
// where the createBrowserRouter() is, and added as a loader
// to the element that needs the data
export async function loader() {
	const menu = await getMenu();
	return menu;
}

export default Menu;
