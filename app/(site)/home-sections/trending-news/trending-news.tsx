import TrendingNewsCard from "./components/trending-news-card";
import "./trending-news.css";

const trendingNews: {
	imgSrc: string;
	imgAlt: string;
	heading: string;
	summary: string;
	date: string | null;
	link: string;
}[] = [
	{
		imgSrc: "/trending-images/Rectangle9.png",
		imgAlt: "Test",
		heading: "politics",
		date: "November 10 2024",
		link: "#",
		summary:
			"African youth are leading climate protests to demand sustainable policies and climate justice.",
	},
	{
		imgSrc: "/trending-images/Rectangle10.png",
		imgAlt: "Test",
		heading: "tech",
		date: null,
		link: "#",
		summary:
			"Africa's tech ecosystem is booming, with cities like Lagos, Nairobi, and Cape Town emerging as tech hubs. ",
	},
	{
		imgSrc: "/trending-images/Rectangle11.png",
		imgAlt: "Test",
		heading: "culture",
		date: null,
		link: "#",
		summary:
			"African nations are preserving cultural heritage through festivals, art, and tourism.",
	},
	{
		imgSrc: "/trending-images/Rectangle13.png",
		imgAlt: "Test",
		heading: "crime",
		date: null,
		link: "#",
		summary:
			"Rising urban crime in African cities is prompting initiatives to enhance security and reduce unemployment.",
	},
	{
		imgSrc: "/trending-images/Rectangle14.png",
		imgAlt: "Test",
		heading: "travel",
		date: null,
		link: "#",
		summary:
			"Africa remains a top travel choice with stunning wildlife, cultural landmarks, and beautiful beaches.",
	},
];

export default function TrendingNews() {
	return (
		<section className="TrendingNews">
			<h2>Trending</h2>
			<div className="NewsList">
				<div className="TopNews">
					<TrendingNewsCard
						imgAlt={trendingNews[0].imgAlt}
						imgSrc={trendingNews[0].imgSrc}
						summary={trendingNews[0].summary}
						link={trendingNews[0].link}
						heading={trendingNews[0].heading}
						date={trendingNews[0].date}
					/>
				</div>
				<div className="OtherNews">
					{trendingNews.slice(1).map((item) => {
						const { link, imgSrc, imgAlt, heading, summary, date } = item;
						return (
							<TrendingNewsCard
								imgAlt={imgAlt}
								imgSrc={imgSrc}
								summary={summary}
								link={link}
								heading={heading}
								date={date}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
