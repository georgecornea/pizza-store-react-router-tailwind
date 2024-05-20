import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="bg-yellow-400 uppercase">
      <Link className="tracking-[5px]" to="/">
        React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
