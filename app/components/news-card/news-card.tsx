import PlayIcon from "@/app/icons/play/play";
import "./news-card.css";
import Image from "next/image";
import React from "react";

export default function NewsCard({
	type,
	imgSrc,
	imgAlt,
	children,
}: {
	type: string;
	imgSrc: string;
	imgAlt: string;
	children: React.ReactNode;
}) {
	return (
		<figure data-type={type} className="NewsCard">
			<div className="ImageWrapper">
				<Image width={2000} height={2000} alt={imgAlt} src={imgSrc} />
				<PlayIcon />
			</div>
			<figcaption>{children}</figcaption>
		</figure>
	);
}
