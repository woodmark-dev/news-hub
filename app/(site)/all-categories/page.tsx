import NavBar from "@/app/components/nav-bar/nav-bar";
import "./page.css";
import FilterButton from "../sports/sections/filter-button/filter-button";
import SubToNewsLetter from "../sports/sections/sub-to-news-letter/sub-to-news-letter";
import CategoryList from "./sections/category-list/category-list";
import SubNews from "./sections/sub-news/sub-news";
export default function AllCategoriesPage() {
	return (
		<div className="AllCategoriesPage">
			<FilterButton />
			<NavBar />
			<CategoryList />
			<SubNews />
			<SubToNewsLetter />
		</div>
	);
}
