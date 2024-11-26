import NavBar from "@/app/components/nav-bar/nav-bar";
import FilterButton from "../sports/sections/filter-button/filter-button";
import "./page.css";
import SubToNewsLetter from "../sports/sections/sub-to-news-letter/sub-to-news-letter";
import AboutUsDescription from "./sections/description/description";
import MidSection from "./sections/mid-section/mid-section";
export default function AboutUsPage() {
	return (
		<div className="AboutUsPage">
			<FilterButton />
			<NavBar />
			<AboutUsDescription />
			<MidSection />
			<SubToNewsLetter />
		</div>
	);
}
