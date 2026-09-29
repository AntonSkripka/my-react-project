import defaultImage from "./default.png" //! Дефолтне зображення

function onErrorImg(e) {
    e.target.onError=null;
    e.target.src=defaultImage;
}

export default function PaintingItem({
    url=defaultImage,
    title,
    author,
    profileUrl,
    price,
    quantity
}) {
    return (
        <>
            <img src={url} alt={title} width="480" onError={(e) => onErrorImg(e)}/>
            <h2>{title}</h2>
            <p>Автор: <a href={profileUrl}>{author}</a></p>
            <p>Цена: {price} кредитов</p>
            <p>Доступность: {quantity}</p>
            <button type="button">Додати до кошику</button>
        </>
    )
}