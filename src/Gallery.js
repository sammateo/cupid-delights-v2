import React from "react";
import { gallery } from "./data/gallerydata";
const Gallery = () => {
	return (
		<div>
			<h1>Gallery</h1>
			<div className="gallery">
				{gallery.map((img) =>
					img.includes(".mp4") ? (
						<video
							key={img}
							width="300"
							height="300"
							autoPlay
							muted
							// webkit-playsInline
							playsInline
							loop={true}
						>
							<source src={img} type="video/mp4"></source>
							Your browser does not support the video tag.
						</video>
					) : (
						<img key={img} src={img} alt={img} width={300} height={300} />
					)
				)}
			</div>
		</div>
	);
};

export default Gallery;
