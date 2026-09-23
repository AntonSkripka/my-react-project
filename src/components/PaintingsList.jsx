export default function PaintingList({
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