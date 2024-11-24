import OtherFootBallUpdateCard from "./components/other-football-update-card/other-football-update-card";
import TopFootballUpdateCard from "./components/top-football-update-card/top-football-update-card";
import "./football-updates.css";

const footballUpdates: {
	link: string;
	imgSrc: string;
	imgAlt: string;
	newsSource: string | null;
	summary: string;
}[] = [
	{
		link: "#",
		imgAlt: "football update",
		imgSrc: "/sport-updates/first.png",
		newsSource: "Punch News",
		summary:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim admi nim veniam illi magnum.",
	},
	{
		link: "#",
		imgAlt: "football update",
		imgSrc: "/sport-updates/second.png",
		newsSource: "premium times",
		summary:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		link: "#",
		imgAlt: "football update",
		imgSrc: "/sport-updates/third.png",
		newsSource: null,
		summary:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		link: "#",
		imgAlt: "football update",
		imgSrc: "/sport-updates/fourth.png",
		newsSource: null,
		summary:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
	{
		link: "#",
		imgAlt: "football update",
		imgSrc: "/sport-updates/fifth.png",
		newsSource: null,
		summary:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
	},
];

export default function FootballUpdates() {
	return (
		<section className="FootballUpdates">
			<header>
				<h2>football</h2>
			</header>
			<div className="BodyContent">
				<div className="TopSide">
					<TopFootballUpdateCard
						link={footballUpdates[0].link}
						imgAlt={footballUpdates[0].imgAlt}
						imgSrc={footballUpdates[0].imgSrc}
						newsSource={footballUpdates[0].newsSource}
						summary={footballUpdates[0].summary}
					/>
					<TopFootballUpdateCard
						link={footballUpdates[1].link}
						imgAlt={footballUpdates[1].imgAlt}
						imgSrc={footballUpdates[1].imgSrc}
						newsSource={footballUpdates[1].newsSource}
						summary={footballUpdates[1].summary}
					/>
				</div>
				<div className="BottomSide">
					{footballUpdates.slice(2).map((item) => {
						const { link, imgSrc, imgAlt, summary } = item;
						return (
							<OtherFootBallUpdateCard
								link={link}
								imgAlt={imgAlt}
								imgSrc={imgSrc}
								summary={summary}
								key={imgSrc}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
