import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

export default function AppLayout() {
	// hook provided by react-router-dom
	// provides a state that can be loading, idle
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	return (
		<div className='layout'>
			{isLoading && <Loader />}

			<Header />
			<main>
				<Outlet />
			</main>
			<CartOverview />
		</div>
	);
}
