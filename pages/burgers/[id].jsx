import Image from "next/image";

import styles from "../../styles/Burgers.module.css";
import data from "../../db.json";

const Details = ({ burger }) => {
	return (
		<div className={styles.singleBurger}>
			<h1>{burger.name}</h1>
			<div className={styles.imageContainer}>
				<Image
					src={`${burger.image}`}
					alt={`${burger.name}`}
					width="100%"
					height="100%"
					layout="responsive"
					objectFit="cover"
				/>
			</div>
			<div>
				<p>{burger.desc}</p>
			</div>
		</div>
	);
};

export default Details;

export const getStaticProps = async (context) => {
	const burgerData = data.items.find(burger => burger.id === context.params.id)

	return {
		props: {
			burger: burgerData,
		},
	};
};


export const getStaticPaths = async () => {
	const paths = data.items.map((burger) => {
		return {
			params: { id: burger.id },
		};
	});
	return {
		paths,
		fallback: false,
	};
};