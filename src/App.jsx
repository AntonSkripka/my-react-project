import paintings from "./json/paintings.json";

const painting1 = paintings[0];
const painting2 = paintings[1];
const painting3 = paintings[2];

export default function App() {
    function Painting({
        url,
        title,
        author,
        profileUrl,
        price,
        quantity
    }) {
        return (
            <>
                <div>
                    <img src={url} alt={title} width="480" />
                    <h2>{title}</h2>
                    <p>Автор: <a href={profileUrl}>{author}</a></p>
                    <p>Цена: {price} кредитов</p>
                    <p>Доступность: {quantity}</p>
                    <button type="button">Додати до кошику</button>
                </div>
            </>
        )
    }
    return (
        <>
            <Painting
                url={painting1.url}
                title={painting1.title}
                author={painting1.author.tag}
                profileUrl={painting1.author.url}
                price={painting1.price}
                quantity={painting1.quantity}
            />
            <Painting
                url={painting2.url}
                title={painting2.title}
                author={painting2.author.tag}
                profileUrl={painting2.author.url}
                price={painting2.price}
                quantity={painting2.quantity}
            />
            <Painting
                url={painting3.url}
                title={painting3.title}
                author={painting3.author.tag}
                profileUrl={painting3.author.url}
                price={painting3.price}
                quantity={painting3.quantity}
            />
        </>
    )
}
