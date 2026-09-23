import paintings from "./json/paintings.json";
import PaintingList from "./components/PaintingsList.jsx";

const painting1 = paintings[0];
const painting2 = paintings[1];
const painting3 = paintings[2];

export default function App() {
    return (
        <>
            <PaintingList
                url={painting1.url}
                title={painting1.title}
                author={painting1.author.tag}
                profileUrl={painting1.author.url}
                price={painting1.price}
                quantity={painting1.quantity}
            />
            <PaintingList
                url={painting2.url}
                title={painting2.title}
                author={painting2.author.tag}
                profileUrl={painting2.author.url}
                price={painting2.price}
                quantity={painting2.quantity}
            />
            <PaintingList
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
