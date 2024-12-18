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
		imgAlt: "Coco Gauff lifting the WTA trophy",
		imgSrc: "/sport-updates/sixth.png",
		summary:
			"American tennis star Coco Gauff claims her first WTA title after defeating a top-ranked African player in a thrilling final match.",
	},
	{
		link: "#",
		category: "football",
		heading: "Super Eagles Shine in AFCON",
		imgAlt: "Super Eagles celebrating a goal",
		imgSrc: "/sport-updates/seventh.png",
		summary:
			"Nigeria's Super Eagles secure a crucial victory in the African Cup of Nations, boosting their chances for the finals.",
	},
	{
		link: "#",
		category: "athletics",
		heading: "Kenya Dominates Marathon Races",
		imgAlt: "Kenyan athlete crossing the finish line",
		imgSrc: "/sport-updates/eigth.png",
		summary:
			"Kenyan runners once again dominate the global marathon circuit, finishing in record-breaking times across major events.",
	},
	{
		link: "#",
		category: "boxing",
		heading: "Nigerian Boxer Wins International Title",
		imgAlt: "Nigerian boxer celebrating with a title belt",
		imgSrc: "/sport-updates/ninth.png",
		summary:
			"Nigerian boxing champion secures a prestigious international title, showcasing African talent on the global stage.",
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
