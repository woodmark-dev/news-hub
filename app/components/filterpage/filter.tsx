import LeftSection from "./components/leftside";
import RightSection from "./components/rightside";
import "./filter.css";
import NavBar from "../nav-bar/nav-bar";
import FilterButton from "@/app/(site)/sports/sections/filter-button/filter-button";

const Filter = () => {
	return (
		<div className="filter-page">
			<FilterButton />
			<NavBar />
			<div className="Body">
				<main className="main-content">
					<LeftSection />
					<RightSection />
				</main>
			</div>
		</div>
	);
};

export default Filter;
