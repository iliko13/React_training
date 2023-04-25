import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const name13 = "ilo";
// root.render(<h1>Hello , {name13}</h1>);

// const products = [
//   { title: "Cabbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 },
// ];

// function Fruit() {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? "magenta" : "darkgreen",
//       }}
//     >
//       {product.title}
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }

// root.render(Fruit());

//ორი ღილაკის ფუნქცია სადაც ცალცალკე ითვლის
// function ButtonAdd() {
//   return (
//     <>
//       <h1>Click to the button</h1>
//       <ButtonClicked />
//       <ButtonClicked />
//     </>
//   );
// }

// function ButtonClicked() {
//   const [count, setCount] = useState(0);

//   function handleClicked() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClicked}>Clicked {count} times</button>;
// }

// root.render(ButtonAdd());

//
//
// function tick() {
//   const element = (
//     <>
//       <h1>Here is a Date</h1>
//       <h2>It is {new Date().toLocaleString()}</h2>
//     </>
//   );
//   root.render(element);
// }
// setInterval(tick, 1000);

//
//props
// function Hello(props) {
//   return <h1>Hello, my friend {props.name}</h1>;
// }

// const element = <Hello name="Ilia" />;
// root.render(element);

//
// function GoodBye(props) {
//   return <h1>Goodbye, my friend {props.name}</h1>;
// }

// const element = <GoodBye name="ilia" />;
// root.render(element);

// //class -ებით იგივეს გამოხატვა
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// const element13 = <Welcome name="ilia" />;
// root.render(element13);
