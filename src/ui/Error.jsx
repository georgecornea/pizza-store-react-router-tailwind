import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();
	// hook provided by react-router-dom
	// provides errors if any
	const error = useRouteError();
	console.log(error);

	return (
		<div>
			<h1>Something went wrong 😢</h1>
			<p>{error.data || error.message}</p>
			<button onClick={() => navigate(-1)}>&larr; Go back</button>
		</div>
	);
}

export default NotFound;
