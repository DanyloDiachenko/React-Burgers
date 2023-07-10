import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Burgers.module.css";
import data from "../../db.json";

const Burgers = ({ burgers }) => {
    return (
        <div>
            <h1>Наши Бургеры</h1>
            {burgers.map(burger => {
                return (
                    <Link href={`/burgers/${burger.id}`} key={burger.id}>
                        <a className={styles.burgerCard}>
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
                                <h3>{burger.name}</h3>
                                <p>{burger.desc}</p>
                            </div>
                        </a>
                    </Link>
                );
            })}
        </div>
    );
};

export default Burgers;

export const getStaticProps = async () => {
    return {
        props: { burgers: data.items }
    };
};