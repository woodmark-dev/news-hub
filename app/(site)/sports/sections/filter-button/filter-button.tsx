import Button from "@/app/components/button/button";
import "./filter-button.css";
import Link from "next/link";
export default function FilterButton() {
	return (
		<section className="filterButton">
			<Link href="/filter">
				<Button type="primary" text="filter news" />
			</Link>
		</section>
	);
}
