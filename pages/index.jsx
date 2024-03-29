import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section>
      <Head>
        <title>Жирные Бургеры | Главная</title>
        <meta name="title" content="Жирные бургеры" />
        <meta name="description" content="Купить вкусные дешевые с доставкой домой" />
      </Head>

      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Главная</h1>
        <div className={styles.mainImage}>
          <Image src="/fatburger.png" alt="Fat Burger" width={400} height={300} />
        </div>
        <p className={styles.description}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
        <p className={styles.description}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p>
        <Link href="/burgers">
          <a className={styles.btn}>Все Бургеры</a>
        </Link>
      </div>
    </section>
  );
};

export default Home;