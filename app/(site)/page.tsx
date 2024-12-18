import NavBar from "../components/nav-bar/nav-bar";
import Entertainment from "./home-sections/entertainment/entertainment";
import FeaturedArticles from "./home-sections/featured-articles/featured-articles";
import SubscribeBox from "./home-sections/subscribe-box/subscribe-box";
import TrendingNews from "./home-sections/trending-news/trending-news";
import VideosSection from "./home-sections/videos/videos";
import "./page.css";
import FilterButton from "./sports/sections/filter-button/filter-button";

export default function LandingPage() {
	return (
		<div className="LandingPage">
			<FilterButton />
			<NavBar />
			<TrendingNews />
			<FeaturedArticles />
			<Entertainment />
			<VideosSection />
			<SubscribeBox />
		</div>
	);
}
