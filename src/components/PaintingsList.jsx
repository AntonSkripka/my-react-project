import PaintingItem from "./PaintingItem"

export default function PaintingList({ items }) {
    console.log(items);
    return (
        <ul>
            {items.map((item, index) =>
                <li
                    // key={item.id}
                    key={index}
                >
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