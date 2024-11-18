import TrendingNewsCard from "../../home-components/trending-news-card/trending-news-card";
import "./trending-news.css";

const trendingNews: {
	imgSrc: string;
	imgAlt: string;
	tag: string;
	description: string;
}[] = [
	{
		imgSrc: "/trending-images/Rectangle9.png",
		imgAlt: "Test",
		tag: "politics",
		description:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},
	{
		imgSrc: "/trending-images/Rectangle10.png",
		imgAlt: "Test",
		tag: "tech",
		description:
			"Proin placerat quis sem a venenatis. Nullam s id tristique sapien. Etiam inter.",
	},
	{
		imgSrc: "/trending-images/Rectangle11.png",
		imgAlt: "Test",
		tag: "culture",
		description:
			"Proin placerat quis sem a venenatis. Nullam s id tristique sapien. Etiam inter.",
	},
	{
		imgSrc: "/trending-images/Rectangle13.png",
		imgAlt: "Test",
		tag: "crime",
		description:
			"Proin placerat quis sem a venenatis. Nullam s id tristique sapien. Etiam inter.",
	},
	{
		imgSrc: "/trending-images/Rectangle14.png",
		imgAlt: "Test",
		tag: "travel",
		description:
			"Proin placerat quis sem a venenatis. Nullam s id tristique sapien. Etiam inter.",
	},
];

export default function TrendingNews() {
	return (
		<section className="TrendingNews">
			<h2>Trending News</h2>
			<div className="NewsList">
				{trendingNews.map((item) => {
					return (
						<TrendingNewsCard
							imgAlt={item.imgAlt}
							tag={item.tag}
							imgSrc={item.imgSrc}
							description={item.description}
						/>
					);
				})}
			</div>
		</section>
	);
}
