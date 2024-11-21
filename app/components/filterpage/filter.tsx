import LeftSection from "../filterpage/leftside";
import RightSection from "../filterpage/rightside";
import "./style/filter.css";

const Filter = () => {
	return (
		<div className="filter-page">
			{/* Header Section */}
			<p className="HL"></p>
			<header className="header">
				{/* <hr className="header-line" /> */}
				<div className="top">
					<div className="menu">
						<button>Filter:</button>
						<button>Most Popular</button>
						<button>Most Recent</button>
					</div>
					<h2 className="content">Featured Contents</h2>
				</div>
			</header>

			{/* Main Content Section */}
			<main className="main-content">
				{/* Left Section */}
				<LeftSection />
				<hr className="vertical" />
				{/* Right Section */}
				<RightSection />
			</main>
		</div>
	);
};

export default Filter;
