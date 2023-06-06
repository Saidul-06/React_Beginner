import logo from "./logo.svg";
import "./App.css";
const number = 555;
const singer = { name: "Saidul Alam", job: "Programmer" };
const cssStyles = {
  color: "red",
  backgroundColor: "white",
};

const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'sopno'},
  {name: 'shuvro', job: 'pathor'}
]


function App() {
  const nayoks = ['jamal','kamal','alal','dulal'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Person name = {nayok} >  </Person>)
      }

    {
      singers.map(singer => <Person name ={singer.name} song = {singer.job}></Person>)
    }

      {/* <Person name = 'Rubel' ></Person> */}

     {/*  <Person name = 'joshim'nayika = 'sabana'></Person>
      <Person name = 'Bapparaj' nayika = 'janine'></Person> */}
      {/* <h2>hagsfja</h2>
      <h2>hagsfjakwjasfk</h2>
      <Friends movie = 'AayDev' phone = '0177'></Friends>
      <Friends movie = 'Sharukh' phone = '018' ></Friends> */}
    </div>
  );
}
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <h4>{props.song}</h4>
    </div>
  );
}



/* function Friends(props) {
  return (
    <div className="friends">
      <h1>{props.movie}</h1>
      <p>Phone : {props.phone}</p>
    </div>
  );
}
 */


export default App;
