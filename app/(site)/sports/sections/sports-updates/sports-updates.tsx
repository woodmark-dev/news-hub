import OtherSportsUpdateCard from "./components/other-sports-updates/other-sports-updates";
import TopSportUpdateCard from "./components/top-sport-update-card/top-sport-update-card";
import "./sports-updates.css";

const sportsUpdates: {
	link: string;
	category: string | null;
	heading: string | null;
	summary: string;
	imgSrc: string;
	imgAlt: string;
}[] = [
	{
		link: "#",
		category: "tennis",
		heading: "Gauff wins WTA Title",
		imgAlt: "sports update",
		imgSrc: "/sport-updates/sixth.png",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},
	{
		link: "#",
		category: null,
		heading: null,
		imgAlt: "sports update",
		imgSrc: "/sport-updates/seventh.png",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},
	{
		link: "#",
		category: null,
		heading: null,
		imgAlt: "sports update",
		imgSrc: "/sport-updates/eigth.png",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},
	{
		link: "#",
		category: null,
		heading: null,
		imgAlt: "sports update",
		imgSrc: "/sport-updates/ninth.png",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},
];

export default function SportsUpdates() {
	return (
		<section className="SportsUpdates">
			<header>
				<h2>Sport Update</h2>
			</header>
			<div className="BodyContent">
				<div className="TopSide">
					<TopSportUpdateCard
						link={sportsUpdates[0].link}
						category={sportsUpdates[0].category}
						heading={sportsUpdates[0].heading}
						summary={sportsUpdates[0].summary}
						imgSrc={sportsUpdates[0].imgSrc}
						imgAlt={sportsUpdates[0].imgAlt}
					/>
				</div>
				<div className="Line" role="Line separator"></div>
				<div className="BottomSide">
					{sportsUpdates.slice(1).map((item) => {
						const { link, summary, imgSrc, imgAlt } = item;
						return (
							<OtherSportsUpdateCard
								link={link}
								summary={summary}
								imgSrc={imgSrc}
								imgAlt={imgAlt}
								key={imgSrc}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
