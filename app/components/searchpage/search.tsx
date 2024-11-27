import "../searchpage/search.css";
import SubToNewsLetter from "@/app/(site)/sports/sections/sub-to-news-letter/sub-to-news-letter";
import SearchPageBody from "./sections/body/body";
import FilterButton from "@/app/(site)/sports/sections/filter-button/filter-button";
import NavBar from "../nav-bar/nav-bar";

const SearchPage = () => {
	return (
		<div className="SearchPage">
			<FilterButton />
			<NavBar />
			<SearchPageBody />
			<SubToNewsLetter />
		</div>
	);
};

export default SearchPage;
