import paintings from "./json/paintings.json";
import PaintingList from "./components/PaintingsList.jsx";
import Section from "./components/Section.jsx";

// const painting1 = paintings[0];
// const painting2 = paintings[1];
// const painting3 = paintings[2];

export default function App() {
    return (
        // <>
        //     <PaintingList
        //         url={painting1.url}
        //         title={painting1.title}
        //         author={painting1.author.tag}
        //         profileUrl={painting1.author.url}
        //         price={painting1.price}
        //         quantity={painting1.quantity}
        //     />
        //     <PaintingList
        //         url={painting2.url}
        //         title={painting2.title}
        //         author={painting2.author.tag}
        //         profileUrl={painting2.author.url}
        //         price={painting2.price}
        //         quantity={painting2.quantity}
        //     />
        //     <PaintingList
        //         url={painting3.url}
        //         title={painting3.title}
        //         author={painting3.author.tag}
        //         profileUrl={painting3.author.url}
        //         price={painting3.price}
        //         quantity={painting3.quantity}
        //     />
        // </>
        // <div>
        //     {/* [1,2,3,4,5]
        //     <br />
        //     {[1, 2, 3, 4, 5]}
        //     <br />
        //     {[1, 2, 3, 4, 5].map(el => <div>{el}</div>)}
        //     <br /> */}
        //     {paintings.map(el => (
        //             <div>
        //                 <img src={el.url} alt={el.title} width="480" />
        //                 <h2>{el.title}</h2>
        //                 <p>Автор: <a href={el.author.url}>{el.author.tag}</a></p>
        //                 <p>Цена: {el.price} кредитов</p>
        //                 <p>Доступность: {el.quantity}</p>
        //                 <button type="button">Додати до кошику</button>
        //             </div>
        //         )
        //     )}
        // </div>
        // <PaintingList items={paintings}/>
        <Section title={"Список картин"}>
            <PaintingList items={paintings}/>
        </Section>
    )
}
