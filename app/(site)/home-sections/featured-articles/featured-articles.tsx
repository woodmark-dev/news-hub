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
			"African athletes continue to dominate sports like athletics, football, and cycling on the global stage. Countries like Kenya, Ethiopia, and Nigeria are producing top-tier talent who inspire millions.",
	},

	{
		id: 2,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle16.png",
		heading: "economy",
		link: "#",
		date: "1 hr ago",
		summary:
			"Africa is embracing renewable energy solutions, with countries like Morocco, South Africa, and Kenya investing in solar and wind power to address energy shortages and promote sustainability.",
	},

	{
		id: 3,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle17.png",
		heading: "business",
		link: "#",
		date: "1 hr ago",
		summary:
			"African businesses are leveraging technology to drive innovation. From mobile banking in Kenya to e-commerce platforms in Nigeria, digital transformation is shaping Africa’s future economy.",
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
