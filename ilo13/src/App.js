import React, { useState, useEffect, useReducer, useRef } from "react";
import "./App.css";

// function App() {
//   return <div>ilo</div>;
// }

// export default App;
// import { useState } from "react";

// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return <button onClick={onClick}>Clicked {count} times</button>;
// }

//
// //button -ით შევცვალოთ მნიშვნელობა
// import React, { useState } from "react";

// function App() {
//   const [price, setPrice] = useState(350);

//   const clickHandler = () => {
//     setPrice(150);
//   };

//   return (
//     <>
//       <h1>ღირებულება - {price}$</h1>
//       <button onClick={clickHandler}>აქციით სარგებლობა</button>
//     </>
//   );
// }

// export default App;

//
// //inputebi
// import React, { useState } from "react";

// function App() {
//   const [enterTitle, setEnterTitle] = useState("");

//   const clickHandler = (event) => {
//     setEnterTitle(event.target.value);
//     console.log(event.target.value.length);
//   };

//   return (
//     <>
//       <div>ჩაწერეთ თქვენი სახელი</div>
//       <input type="text" onChange={clickHandler} />
//     </>
//   );
// }

// export default App;

// //input2
// import React, { useState } from "react";

// function App() {
//   const [same, setSame] = useState("Invalid"); //აქ იმიტომ ვუწერთ invalid-ს რომ same-ში თავიდანვე ეწეროს ეგ მნიშვნელობა.

//   const changeHandler = (event) => {
//     const value = event.target.value;

//     if (value.trim().length < 3) {
//       setSame("Invalid");
//     } else {
//       setSame("Valid");
//     }
//   };

//   return (
//     <>
//       <p>თქვენი სახელი</p>
//       <input type="text" onChange={changeHandler} />
//       <p>{same} answer</p>
//     </>
//   );
// }

// export default App;

//
// //TODO LIST
// import Todo from "./todo/todo";
// import "./todo/styleTodo.css";

// const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

// export default function App() {
//   return (
//     <ul>
//       {DUMMY_TODOS.map((todo) => (
//         <Todo text={todo} />
//       ))}
//     </ul>
//   );
// }

// //output, are u sure?
// import React, { useState } from "react";
// import "./output/output.css";

// export default function App() {
//   const [isDeleting, setIsDeleting] = useState(false); //თუ false არის მაშინ ერორი არ გამოჩნდება.

//   function deleteHandler() {
//     setIsDeleting(true);
//   }

//   function proceedHandler() {
//     setIsDeleting(false);
//   }

//   return (
//     <div>
//       {isDeleting ? (
//         <div id="alert">
//           <h2>Are you sure?</h2>
//           <p>These changes can't be reverted!</p>
//           <button onClick={proceedHandler}>Proceed</button>
//         </div>
//       ) : (
//         ""
//       )}
//       <button onClick={deleteHandler}>Delete</button>
//     </div>
//   );
// }

//
// //style
// import React, { useState } from "react";
// import "./styling/style.css";

// export default function App() {
//   const [highlighted, setHighighted] = useState(false);

//   function clickHandler() {
//     setHighighted((isHighlighted) => !isHighlighted);
//   }

//   return (
//     <>
//       <p style={{ color: highlighted ? "red" : "white" }}>Style me</p>
//       <button onClick={clickHandler}>Toggle style</button>
//     </>
//   );
// }

// //style dinamyic
// import React, { useState } from "react";
// import "./styledinamyc/style.css";

// export default function App() {
//   const [highlighted, setHighighted] = useState(false);

//   function clickHandler() {
//     setHighighted((isHighlighted) => !isHighlighted);
//   }

//   return (
//     <>
//       <p className={highlighted ? "active" : ""}>Syle me</p>
//       <button onClick={clickHandler}>Toggle style</button>
//     </>
//   );
// }
//

//
// //classes
// import Button from "./button/Button";

// class App extends React.Component {
//   constructor(props) {
//     super(props); //ეს აუცილებლად სჭირდება კონსტრუქტორის დროს statement როცა ვაწყობთ
//     this.state = {
//       helpText: "Help Text",
//       userData: "",
//     };
//     this.inputClick = this.inputClick.bind(this);
//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.helpText}</h1>
//         <h2>{this.state.userData}</h2>
//         <input
//           placeholder={this.state.helpText}
//           onClick={this.inputClick}
//           onChange={(event) => this.setState({ userData: event.target.value })}
//         />
//         <Button />
//         <Button text="Button" />
//       </>
//     );
//   }

//   inputClick() {
//     this.setState({ helpText: "Changed" }); // setState იმიტომ გამოვიძახეთ რომ ცვლილება მოეხდინა როცა ვაჭერთ
//   }
// }

// export default App;

// class App extends React.Component {
//   users = [
//     {
//       id: 1,
//       firstname: "Bob",
//       lastname: "Marley",
//       age: 40,
//       isHappy: true,
//     },
//     {
//       id: 2,
//       firstname: "John",
//       lastname: "Kukava",
//       age: 37,
//       isHappy: false,
//     },
//   ];
//   //key იმიტომ უნდა და ვუწეროთ რომ კონსოლსი არ ამოაგდოს ერორი
//   render() {
//     if (this.users.length > 0) {
//       return (
//         <>
//           {this.users.map((el) => (
//             <div key={el.id}>
//               <h3>
//                 {el.firstname} {el.lastname}
//               </h3>
//               <p>{el.isHappy ? "Happy" : "Not Happy"}</p>
//             </div>
//           ))}
//         </>
//       );
//     } else {
//       return (
//         <>
//           <h3>Nothing</h3>
//         </>
//       );
//     }
//   }
// }

// export default App;

//

// import Users from "./user/users";
// import AddUser from "./user/AddUser";
// import axios from "axios";

// const baseUrl = "https://reqres.in/api/users?page=2";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     axios.get(baseUrl).then((res) => {
//       this.setState({ users: res.data.data });
//     });

//     this.state = {
//       users: [],
//     };
//     this.addUser = this.addUser.bind(this);
//     this.deleteUser = this.deleteUser.bind(this);
//     this.editUser = this.editUser.bind(this);
//   }

//   render() {
//     return (
//       <>
//         <main>
//           <Users
//             users={this.state.users}
//             onEdit={this.editUser}
//             onDelete={this.deleteUser}
//           />
//         </main>
//         <aside>
//           <AddUser onAdd={this.addUser} />
//         </aside>
//       </>
//     );
//   }

//   deleteUser(id) {
//     this.setState({
//       users: this.state.users.filter((el) => el.id !== id),
//     });
//   }

//   editUser(user) {
//     let allUsers = this.state.users;
//     allUsers[user.id - 1] = user;

//     this.setState({ users: [] }, () => {
//       this.setState({ users: [...allUsers] });
//     });
//   }

//   addUser(user) {
//     const id = this.state.users.length + 1;
//     this.setState({ users: [...this.state.users, { id, ...user }] });
//     // ამით ჩვენ არსებულ users -ის ორ მონაცემის მერე ვუწერთ შემდეგში მომხრებლის მიერ დაწერილი ინფო
//   }
// }

// export default App;

//
// - udemy
//useState in arrays
// const data = [
//   { id: 1, firstName: "Ilia", secondName: "Kukava" },
//   { id: 2, firstName: "Mishka", secondName: "Jgamadze" },
//   { id: 3, firstName: "Kato", secondName: "Jgamadze" },
// ];

// function App() {
//   const [people, setPeople] = useState(data);

//   const removeItem = (id) => {
//     const newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople);
//   };

//   const removeAllItem = () => {
//     setPeople([]);
//   };

//   return (
//     <>
//       {people.map((person) => {
//         const { id, firstName, secondName } = person;

//         return (
//           <div key={id}>
//             <h3>
//               {firstName} {secondName}
//             </h3>
//             <button
//               type="button"
//               onClick={() => {
//                 removeItem(id);
//               }}
//             >
//               Remove
//             </button>
//           </div>
//         );
//       })}
//       <button type="button" onClick={removeAllItem}>
//         Remove All
//       </button>
//     </>
//   );
// }

// export default App;

//useState in objects
// function App() {
//   const [person, setPerson] = useState({
//     firstName: "ilia",
//     age: 25,
//     hobby: "Reading books",
//   });

//   const clickEvent = () => {
//     setPerson({ firstName: "Mishka", age: 24, hobby: "playing games" });
//   };
//   const clickEvent2 = () => {
//     setPerson({ ...person, firstName: "Vova" });
//   };

//   return (
//     <>
//       <h1>{person.firstName}</h1>
//       <h3>{person.age}</h3>
//       <p>{person.hobby}</p>
//       <button onClick={clickEvent}>Show another person</button>
//       <button onClick={clickEvent2}>Change only name</button>
//     </>
//   );
// }

// export default App;

//
//settimeout
// function App() {
//   const [value, setValue] = useState(0);

//   const handleClick = () => {
//     setTimeout(() => {
//       setValue((currentState) => {
//         return currentState + 1;
//       });
//     }, 3000);
//   };

//   return (
//     <>
//       <h1>{value}</h1>
//       <button onClick={handleClick}>increase</button>
//     </>
//   );
// }

// export default App;

//
//useEffect

//1
//

// function App() {
//   const [value, setValue] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setValue(false);
//     }, 3000);
//   });

//   if (value) {
//     return <h3>Loading ...</h3>;
//   }
//   return <h3>Here it is</h3>;
// }
// export default App;

//
//2
// fetch data
// const url = "....";

// function App() {
//   const [isloading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const resp = await fetch(url);
//         if (!resp.ok) {
//           setIsError(true);
//           setIsLoading(false);
//           return;
//         }
//         const user = await resp.json();
//         setUser(user);
//       } catch (error) {
//         setIsError(error);
//         console.log(error);
//       }
//       setIsLoading(false);
//     };
//     fetchUser();
//   }, []);

//   if (isloading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     return <h2>There was an error</h2>;
//   }

//   const { name, avatar_url } = user;

//   return (
//     <>
//       <h2>{name}</h2>;
//       <img src={avatar_url} alt={name} />;
//     </>
//   );
// }

// export default App;

//
//3
// login
// function App() {
//   const [user, setUser] = useState(null);

//   const login = () => {
//     setUser({ firstName: "Iliko Kukava" });
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <>
//       {user ? (
//         <div>
//           <h3>Hello dear, {user.firstName}</h3>
//           <button onClick={logout}>logout</button>
//         </div>
//       ) : (
//         <div>
//           <h3>Please login</h3>
//           <button onClick={login}>login</button>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

//4
// //toggle button
// function App() {
//   const [toggle, setToggle] = useState(false);

//   const RandomComponent = () => {
//     useEffect(() => {
//       console.log("Hello, Iliko");
//       const intId = setInterval(() => {
//         console.log("Hello, Mariam");
//       }, 1000);
//       return () => {
//         clearInterval(intId);
//       };
//     }, []);
//     return <h1>Iliko Kukava</h1>;
//   };
//   return (
//     <>
//       <button
//         onClick={() => {
//           setToggle(!toggle);
//         }}
//       >
//         toggle component
//       </button>
//       {toggle && <RandomComponent />}
//     </>
//   );
// }

// export default App;

//
// //useReducer
// const data = [
//   { id: 1, firstName: "Ilia", secondName: "Kukava" },
//   { id: 2, firstName: "Mishka", secondName: "Jgamadze" },
//   { id: 3, firstName: "Kato", secondName: "Jgamadze" },
// ];

// const defaultState = {
//   people: data,
// };

// const CLEAR_LIST = "CLEAR_LIST";
// const RESET_LIST = "RESET_LIST";
// const REMOVE_LIST = "REMOVE_LIST";

// const reducer = (state, action) => {
//   if (action.type === CLEAR_LIST) {
//     return { ...state, people: [] };
//   }
//   if (action.type === RESET_LIST) {
//     return { ...state, people: data };
//   }
//   if (action.type === REMOVE_LIST) {
//     const newPeople = state.people.filter(
//       (person) => person.id !== action.payload.id
//     );
//     return { ...state, people: newPeople };
//   }

//   throw new Error(`No matching '${action.type}' -action type`);
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const removeItem = (id) => {
//     // const newPeople = people.filter((person) => person.id !== id);
//     // setPeople(newPeople);
//     dispatch({ type: REMOVE_LIST, payload: { id } });
//   };

//   const removeAllItem = () => {
//     // setPeople([]);
//     dispatch({ type: CLEAR_LIST });
//   };

//   const resetAllItem = () => {
//     // setPeople(data);
//     dispatch({ type: RESET_LIST });
//   };
//   return (
//     <>
//       {state.people.map((person) => {
//         const { id, firstName, secondName } = person;

//         return (
//           <div key={id}>
//             <h3>
//               {firstName} {secondName}
//             </h3>
//             <button
//               type="button"
//               onClick={() => {
//                 removeItem(id);
//               }}
//             >
//               Remove
//             </button>
//           </div>
//         );
//       })}

//       {state.people.length < 1 ? (
//         <button type="button" onClick={resetAllItem}>
//           Reset
//         </button>
//       ) : (
//         <button type="button" onClick={removeAllItem}>
//           Remove All
//         </button>
//       )}
//     </>
//   );
// }

// export default App;

//
// useEffect
// function App() {
//   const [state, setState] = useState(window.innerWidth);

//   const handleResize = () => {
//     setState(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <>{state}</>;
// }

// export default App;

//
// //useRef
// function App() {
//   const [state, setState] = useState("");
//   const initRef = useRef();

//   const clickHandler = () => {
//     initRef.current.focus();
//   };

//   return (
//     <>
//       <input
//         ref={initRef}
//         value={state}
//         onChange={(e) => setState(e.target.value)}
//       />
//       <h3>Hello, Mr {state}</h3>
//       <button onClick={clickHandler}>Focus</button>
//     </>
//   );
// }

// export default App;

//
