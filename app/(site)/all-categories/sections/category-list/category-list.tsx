import NewsCard from "@/app/components/news-card/news-card";
import "./category-list.css";
import Link from "next/link";

const categoryList = [
	{
		name: "politics",
		imgSrc: "/trending-images/Rectangle9.png",
		imgAlt: "just a white background",
		link: "/politics",
	},
	{
		name: "crime",
		imgSrc: "/trending-images/Rectangle13.png",
		imgAlt: "just a black background",
		link: "/crime",
	},
	{
		name: "sports",
		imgSrc: "/featured-images/Rectangle15.png",
		imgAlt: "a photo of a red jersey",
		link: "/sports",
	},
	{
		name: "entertainment",
		imgSrc: "/trending-images/Rectangle14.png",
		imgAlt: "a blurry photo",
		link: "/entertainment",
	},
	{
		name: "culture",
		imgSrc: "/featured-images/Rectangle24.png",
		imgAlt: "a photo of a chanting lady",
		link: "/culture",
	},
	{
		name: "economy",
		imgSrc: "/featured-images/Rectangle16.png",
		imgAlt: "an unclear image",
		link: "/economy",
	},
];

export default function CategoryList() {
	return (
		<section className="CategoryList">
			{categoryList.map((item) => {
				const { name, imgAlt, imgSrc, link } = item;
				return (
					<Link href={link} key={link} className="Category">
						<NewsCard type="content-top" imgAlt={imgAlt} imgSrc={imgSrc}>
							<div>
								<h4>{name}</h4>
							</div>
						</NewsCard>
					</Link>
				);
			})}
		</section>
	);
}
