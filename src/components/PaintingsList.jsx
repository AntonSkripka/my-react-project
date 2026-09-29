import PaintingItem from "./PaintingItem"

export default function PaintingList({items}) {
    console.log(items);
    return (
        <ul>
            {items.map((item) => <li>
                <PaintingItem
                    url={item.url}
                    title={item.title}
                    author={item.author.tag}
                    profileUrl={item.author.url}
                    price={item.price}
                    quantity={item.quantity}
                />
            </li>)};
        </ul>
    )
}