import Link from "next/link";
import "./right-side.css";
import NewsCard from "../../news-card/news-card";

const news: {
	title: string;
	description: string;
	image: string;
	imgAlt: string;
	link: string;
}[] = [
	{
		title: "Worship with us at FRM!",
		description: "Click the link below for more",
		image: "/filter-images/crowd.svg",
		imgAlt: "family",
		link: "https://frm.co.ng/pgx.asp//",
	},
	{
		title: "2west EP- Rain Down",
		description: "Listen Now",
		image: "/filter-images/speaker.svg",
		imgAlt: "family",
		link: "https://Applemusic.com/pgx.asp//",
	},
	{
		title: "Looking for a Reliable Bank?",
		description: "Bank with Us and Say Less, Click the link below",
		image: "/filter-images/loan.svg",
		imgAlt: "family",
		link: "https://ohhbank.com/",
	},
];

const RightSection = () => {
	return (
		<div className="right-section">
			<header>
				<h4>Featured Contents</h4>
			</header>
			{news.map((item) => {
				const { title, description, image, imgAlt, link } = item;
				return (
					<Link
						href={link}
						target="_black"
						key={image}
						className="right-side-card"
					>
						<NewsCard type="content-bottom" imgAlt={imgAlt} imgSrc={image}>
							<div className="Content">
								<h3>{title}</h3>
								<p>{description}</p>
								<p className="Link">{link}</p>
							</div>
						</NewsCard>
					</Link>
				);
			})}
		</div>
	);
};

export default RightSection;
