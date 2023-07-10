import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 4000)
    }, []);

    return (
        <div className="not-found">
            <h1>Ой...</h1>
            <h2>Такой страницы здесь нет!</h2>
            <p>Вы будете автоматически перенаправлены на <Link href="/"><a>Главную страницу</a></Link> через 3 секунды...</p>
        </div>
    );
};

export default NotFoundPage;