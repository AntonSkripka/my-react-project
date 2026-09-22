import { Fragment } from "react";
import React from 'react'; //! 1 - React-елементи
import ReactDOM from 'react-dom/client'; //! 2 - Render React-елемента
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
const elem1 = <span>Привіт  </span>;
const elem2 = <span>світ!</span>;

const element = (
  // <Fragment>
  //   {elem1}
  //   {elem2}
  //   {"!!"}
  // </Fragment>
  <>
    {elem1}
    {elem2}
    {"!!"}
  </>
);

console.log("element:", element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
