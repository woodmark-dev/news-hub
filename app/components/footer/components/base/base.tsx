import "./base.css";
import moment from "moment";

export default function Base() {
	return (
		<div className="Base">
			<p>
				NEWSHUB <span>&copy;</span> {moment().year()}{" "}
			</p>
			<p>All rights reserved</p>
		</div>
	);
}
