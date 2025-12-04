import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./building.png"
								alt="work experience"
								className="work-image"
							/>
							<div className="work-title">Kacha Digital S.L</div>
							<div className="work-subtitle">
								Mobile developer
							</div>
							<div className="work-duration">
								2024 - november 2025
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
