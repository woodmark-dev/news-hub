import NavBar from "../components/nav-bar/nav-bar";
import TrendingNews from "./home-sections/trending-news/trending-news";

export default function LandingPage() {
	return (
		<div className="LandingPage">
			<NavBar />
			<TrendingNews />
		</div>
	);
}
