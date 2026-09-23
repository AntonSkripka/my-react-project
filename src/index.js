import { Fragment } from "react";
import React from 'react'; //! 1 - React-елементи
import ReactDOM from 'react-dom/client'; //! 2 - Render React-елемента
import paintings from "./json/paintings.json";
console.log(paintings);
//! 1 - React-елементи
// const element = React.createElement("div");
// * document.createElement("div"); //* JS

// const element = React.createElement("div", { a: 5, b: 10 }, "Привіт  світ!");

// const element = React.createElement(
//   "div",
//   { a: 5, b: 10 },
//   "Привіт ",
//   " ",
//   "світ!"
// );

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: ["Привіт ", " ", "світ!"]
// });

// //! 2 - Рендер одного React-елемента
// //? ReactDOM.createRoot(document.getElementById('root')).render(element);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);
// //* root.append(element) //* JS


// console.log("element:", element);

//! 3 - Рендер кількох React-елементів
// const elem1 = React.createElement("span", { children: "Привіт " });
// const elem2 = React.createElement("span", { children: "світ!" });

//todo: Each child in a list should have a unique "key" prop
// const elem1 = React.createElement("span", { key: "elem-1", children: "Привіт " });
// const elem2 = React.createElement("span", { key: "elem-2", children: "світ!" });

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: [elem1, " ", elem2]
// });

// console.log("element:", element);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//! 4 - Рендер JSX-елемента (XML-образний синтаксис)
// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: "Привіт, світ!",
// });

// console.log("element:", element);

// const jsxElement = <div>Привіт, мій світ</div>
// const jsxElementInput = <img src='https://upload.wikimedia.org/wikipedia/commons/6/66/AH-64D_Apache_Longbow.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original' alt='123'/>
// console.log("jsxElement:", jsxElement);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(element);
// root.render(jsxElementInput);

//! 5 - Рендер Вкладених JSX-елементів (інтерполяція)
// const elem1 = <span>Привіт  </span>;
// const elem2 = <span>світ!</span>;

// const element = (
//   // <Fragment>
//   //   {elem1}
//   //   {elem2}
//   //   {"!!"}
//   // </Fragment>
//   <>
//     {elem1}
//     {elem2}
//     {"!!"}
//   </>
// );

// console.log("element:", element);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

//! 6.1 - елемент `painting` 
// * HTML-розмітка:
// <div>
//   <img src="" alt="" width="480" />
//   <h2></h2>
//   <p>Автор: <a href=""></a></p>
//   <p>Цена: кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Додати до кошику</button>
// </div>

const painting1 = paintings[0];
const painting2 = paintings[1];
const painting3 = paintings[2];

const painting = () => (
  <>
    <div>
      <img src={painting1.url} alt={painting1.title} width="480" />
      <h2>{painting1.title}</h2>
      <p>Автор: <a href={painting1.author.url}>{painting1.author.tag}</a></p>
      <p>Цена: {painting1.price} кредитов</p>
      <p>Доступность: {painting1.quantity}</p>
      <button type="button">Додати до кошику</button>
    </div>
    <div>
      <img src={painting2.url} alt={painting2.title} width="480" />
      <h2>{painting2.title}</h2>
      <p>Автор: <a href={painting2.author.url}>{painting2.author.tag}</a></p>
      <p>Цена: {painting2.price} кредитов</p>
      <p>Доступность: {painting2.quantity}</p>
      <button type="button">Додати до кошику</button>
    </div>
    <div>
      <img src={painting3.url} alt={painting3.title} width="480" />
      <h2>{painting3.title}</h2>
      <p>Автор: <a href={painting3.author.url}>{painting3.author.tag}</a></p>
      <p>Цена: {painting3.price} кредитов</p>
      <p>Доступность: {painting3.quantity}</p>
      <button type="button">Додати до кошику</button>
    </div>
  </>
)

// console.log(painting);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(painting);

//! 6.4 КОМПОНЕНТ - функція з даними на вході та розміткою на виході
// //? ❗️❗️❗️ Ім'я функції має бути ОБОВ'ЯЗКОВО з Великої літери ❗️❗️❗️
// const MyFunctionalComponent = props => <div>Functional Component</div>;
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
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Painting props={painting1} b={10}/>);
root.render(
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