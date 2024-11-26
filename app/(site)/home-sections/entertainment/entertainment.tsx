import NewsCard from "@/app/components/news-card/news-card";
import AltHeader from "../../home-components/alt-header/alt-header";
import "./entertainment.css";
import Link from "next/link";

const entertainmentNews: {
	category: string | null;
	heading: string;
	summary: string;
	author: string;
	imgAlt: string;
	imgSrc: string;
	link: string;
}[] = [
	{
		category: "Entertainment",
		heading: "Tems makes history after securing 3 nominations for 67th Grammys",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praesent non ultrices lorem, id tristique sapien. Etiam interdum a ex volutpat mollis.",
		author: "Adejola Pelumi",
		imgAlt: "Entertainment section photo",
		imgSrc: "/entertainment/tems.png",
		link: "#",
	},
	{
		category: null,
		heading: "Fireboy DML & Asake’s ‘Bandana’ earns silver certification",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praese",
		author: "Adejola Pelumi",
		imgAlt: "Entertainment section photo",
		imgSrc: "/entertainment/dml.png",
		link: "#",
	},
];

export default function Entertainment() {
	return (
		<section className="Entertainment">
			<AltHeader text="entertainment" />
			<div className="Body">
				<div className="LeftSide">
					<Link href={entertainmentNews[0].link}>
						<NewsCard
							type="content-left"
							imgAlt={entertainmentNews[0].imgAlt}
							imgSrc={entertainmentNews[0].imgSrc}
						>
							<div className="Body">
								<div className="MainContent">
									<p className="Category">{entertainmentNews[0].category}</p>
									<h4 className="Header">{entertainmentNews[0].heading}</h4>
									<p className="Summary">{entertainmentNews[0].summary}</p>
								</div>

								<div className="Author">
									<p role="Horizontal Line" className="HL"></p>
									<p>{entertainmentNews[0].author}</p>
								</div>
							</div>
						</NewsCard>
					</Link>
				</div>
				<div className="RightSide">
					<Link href={entertainmentNews[1].link}>
						<NewsCard
							type="content-bottom"
							imgAlt={entertainmentNews[1].imgAlt}
							imgSrc={entertainmentNews[1].imgSrc}
						>
							<div className="Body">
								<div className="MainContent">
									<h4 className="Header">{entertainmentNews[1].heading}</h4>
									<p className="Summary">{entertainmentNews[1].summary}</p>
								</div>

								<div className="Author">
									<p role="Horizontal Line" className="HL"></p>
									<p>{entertainmentNews[1].author}</p>
								</div>
							</div>
						</NewsCard>
					</Link>
				</div>
			</div>
		</section>
	);
}
