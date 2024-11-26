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
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},
	{
		imgSrc: "/trending-images/Rectangle10.png",
		imgAlt: "Test",
		heading: "tech",
		date: null,
		link: "#",
		summary:
			"Proin placerat quis sem a venenatis. Nullam s id tristique sapien. Etiam inter.",
	},
	{
		imgSrc: "/trending-images/Rectangle11.png",
		imgAlt: "Test",
		heading: "culture",
		date: null,
		link: "#",
		summary:
			"Proin placerat quis sem a venenatis. Nullam s id tristique sapien. Etiam inter.",
	},
	{
		imgSrc: "/trending-images/Rectangle13.png",
		imgAlt: "Test",
		heading: "crime",
		date: null,
		link: "#",
		summary:
			"Proin placerat quis sem a venenatis. Nullam s id tristique sapien. Etiam inter.",
	},
	{
		imgSrc: "/trending-images/Rectangle14.png",
		imgAlt: "Test",
		heading: "travel",
		date: null,
		link: "#",
		summary:
			"Proin placerat quis sem a venenatis. Nullam s id tristique sapien. Etiam inter.",
	},
];

export default function TrendingNews() {
	return (
		<section className="TrendingNews">
			<h2>Trending News</h2>
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
								key={imgSrc}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
