import Image from "next/image";
import "./videos.css";
import PlayIcon from "@/app/icons/play/play";
import VideoNewsCard from "./components/video-news-card/video-news-card";

const videoNewsList: {
	link: string;
	imgAlt: string;
	imgSrc: string;
	category: string;
	summary: string;
	author: string;
}[] = [
	{
		link: "#",
		imgAlt: "video news image",
		imgSrc: "/videos/first.png",
		category: "Lifestyle",
		summary:
			"Africa’s breathtaking landscapes and natural wonders attract global travelers. ",
		author: "Adejola Pelumi",
	},
	{
		link: "#",
		imgAlt: "video news image",
		imgSrc: "/videos/second.png",
		category: "Food",
		summary:
			"African cuisine, with iconic dishes like jollof rice and tagine, is gaining worldwide acclaim. ",
		author: "Adejola Pelumi",
	},
	{
		link: "#",
		imgAlt: "video news image",
		imgSrc: "/videos/third.png",
		category: "Real Estates",
		summary:
			"Eco-friendly housing solutions are transforming urban living in African cities.",
		author: "Adejola Pelumi",
	},
];

export default function VideosSection() {
	return (
		<section className="VideoSection">
			<div className="LeftSide">
				<header>
					<h2>videos</h2>
				</header>
				<div className="ImageWrapper">
					<Image
						src="/videos/main.png"
						alt="Photo of a waterside"
						width={1000}
						height={1000}
					/>
					<PlayIcon />
				</div>
			</div>
			<div className="RightSide">
				<header>
					<h2>all videos</h2>
				</header>
				<div className="NewsList">
					{videoNewsList.map((item) => {
						const { link, imgAlt, imgSrc, category, summary, author } = item;

						return (
							<VideoNewsCard
								link={link}
								imgAlt={imgAlt}
								imgSrc={imgSrc}
								category={category}
								summary={summary}
								author={author}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
