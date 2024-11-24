import AltHeader from "../../home-components/alt-header/alt-header";
import StayConnected from "../../home-components/stay-connected/stay-connected";
import FeaturedNewsCard from "./components/featured-news-card/featured-news-card";
import RecentArticles from "./components/recent-articles/recent-articles";
import "./featured-articles.css";

const featuredArticles: {
	imgSrc: string;
	imgAlt: string;
	heading: string;
	summary: string;
	id: number;
	link: string;
	date: string;
}[] = [
	{
		id: 1,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle15.png",
		heading: "sports",
		link: "#",
		date: "1 hr ago",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},

	{
		id: 2,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle16.png",
		heading: "economy",
		link: "#",
		date: "1 hr ago",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},

	{
		id: 3,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle17.png",
		heading: "business",
		link: "#",
		date: "1 hr ago",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},
];

export default function FeaturedArticles() {
	return (
		<section className="FeaturedArticles">
			<AltHeader text="featured articles" />

			<div className="ContentWrapper">
				<div className="LeftSide">
					{featuredArticles.map((item) => {
						const { imgSrc, imgAlt, heading, summary, id, link, date } = item;
						return (
							<FeaturedNewsCard
								key={id}
								imgAlt={imgAlt}
								imgSrc={imgSrc}
								heading={heading}
								summary={summary}
								link={link}
								date={date}
							/>
						);
					})}
				</div>

				<div className="RightSide">
					<StayConnected />
					<RecentArticles />
				</div>
			</div>
		</section>
	);
}
