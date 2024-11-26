import Link from "next/link";
import NewsCard from "../../news-card/news-card";
import "./left-side.css";
import Button from "../../button/button";

const news: {
	title: string;
	description: string;
	image: string;
	imgAlt: string;
}[] = [
	{
		title: "Health News",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
		image: "/filter-page/first.png",
		imgAlt: "family",
	},
	{
		title: "Technology News",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
		image: "/filter-page/second.png",
		imgAlt: "music",
	},
	{
		title: "Education News",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
		image: "/filter-page/third.png",
		imgAlt: "learn",
	},
	{
		title: "Economy News",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
		image: "/filter-page/fourth.png",
		imgAlt: "money",
	},
	{
		title: "Housing News",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit . Curabitur vehicula ligula vitae ante tristique, at auctor felis eleifend.",
		image: "/filter-page/fifth.png",
		imgAlt: "home",
	},
];

const LeftSection = () => {
	return (
		<div className="left-section">
			<header>
				<h4>Filter:</h4>
				<Button text="most popular" type="nuetral" />
				<Button text="most recent" type="primary" />
			</header>
			{news.map((item) => {
				const { title, description, image, imgAlt } = item;
				return (
					<Link href="#" className="left-side-card" key={image}>
						<NewsCard imgAlt={imgAlt} imgSrc={image} type="content-bottom">
							<div className="Content">
								<h3>{title}</h3>
								<p>{description}</p>
							</div>
						</NewsCard>
					</Link>
				);
			})}
		</div>
	);
};

export default LeftSection;
