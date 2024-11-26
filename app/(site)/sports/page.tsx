import FilterButton from "./sections/filter-button/filter-button";
import TopUpdates from "./sections/top-updates/top-updates";
import "./page.css";
import NavBar from "@/app/components/nav-bar/nav-bar";
import FootballUpdates from "./sections/football-updates/football-updates";
import SportsUpdates from "./sections/sports-updates/sports-updates";
import SubToNewsLetter from "./sections/sub-to-news-letter/sub-to-news-letter";

export default function SportsPage() {
	return (
		<div className="SportsPage">
			<FilterButton />
			<TopUpdates />
			<NavBar />
			<FootballUpdates />
			<SportsUpdates />
			<SubToNewsLetter />
		</div>
	);
}
