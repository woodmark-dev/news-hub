import NavBar from "../components/nav-bar/nav-bar";
import FeaturedArticles from "./home-sections/featured-articles/featured-articles";
import TrendingNews from "./home-sections/trending-news/trending-news";
import "./page.css";

export default function LandingPage() {
	return (
		<div className="LandingPage">
			<NavBar />
			<TrendingNews />
			<FeaturedArticles />
		</div>
	);
}
