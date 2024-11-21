import AltHeader from "../../home-components/alt-header/alt-header";
import NewsCard from "../../home-components/news-card/news-card";
import StayConnected from "../../home-components/stay-connected/stay-connected";
import "./featured-articles.css";

const featuredArticles: {
	imgSrc: string;
	imgAlt: string;
	tag: string;
	description: string;
	id: number;
}[] = [
	{
		id: 1,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle15.png",
		tag: "sports",
		description:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},

	{
		id: 2,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle16.png",
		tag: "economy",
		description:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},

	{
		id: 3,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle17.png",
		tag: "business",
		description:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},
];

const recentArticles: {
	imgSrc: string;
	imgAlt: string;
	tag: string;
	description: string;
	id: number;
}[] = [
	{
		id: 1,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle15.png",
		tag: "sports",
		description:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},

	{
		id: 2,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle16.png",
		tag: "economy",
		description:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},

	{
		id: 3,
		imgAlt: "sports image",
		imgSrc: "/featured-images/Rectangle17.png",
		tag: "business",
		description:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
	},
];

export default function FeaturedArticles() {
	return (
		<section className="FeaturedArticles">
			<AltHeader text="featured articles" />

			<div className="ContentWrapper">
				<div className="LeftSide">
					{featuredArticles.map((item) => (
						<NewsCard
							imgAlt={item.imgAlt}
							imgSrc={item.imgSrc}
							tag={item.tag}
							description={item.description}
							key={item.id}
							type="row-alignment"
						/>
					))}
				</div>

				<div className="RightSide">
					<StayConnected />
				</div>
			</div>
		</section>
	);
}
