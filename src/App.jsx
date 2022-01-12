import { useState } from "react";

let isHomePage = true;
let isHome = true;

const onClick = () => {
  console.log(isHomePage,);
  isHomePage = !isHomePage
  console.log(isHomePage);
}

let page;

 if (isHomePage) {page = <main>HomePage</main>;}
 else {page = <div>LandingPage</div>;}

/* const PageChange = () => {  

  if (isHomePage) {
    return <main>Home Page</main>;
  } else {
    return <div>Landing Page</div>
  }
}  Ez is egy lehetséges megoldás, componens létrehozásával*/

const toggleText = () => {
  console.log('click');
}

const App = () => {

 let [pages, setPages] = useState(true);
 const [text, setText] = useState('Home');
 const [pageName, setPageName] = useState('Home');

 const togglePage = () => {
   setPages(!pages);
  //  console.log(`New page': ${isHome}`);
 };
 let inputValue = 'Kiss László'

 let [inputValue2, setInputValue2] = useState('Nagy Péter')

 const cars = [
  {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
  {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
  {brand: "Mazda", model: "6", topSpeed: "210km/h"},
  {brand: "Mazda", model: "Civic", topSpeed: "200km/h"},
  {brand: "Audi", model: "A4", topSpeed: "220km/h"},
]
  let list;
  return (
    <div>
      <p>Hello World</p>
      <div>
          
      </div>
          <button onClick={onClick}>if click</button>
          {page}
          
          {/* <button onClick={togglePage}>set Click</button> */}
          <button onClick={() => setPages(!pages)}>set Click</button>
          {
            pages ?
              <div>Home</div> :
              <div>Landing</div>
          }

{/*<PageChange />  component megoldás meghívása*/}    

    <button onClick={() => setText(<div>Home</div>)}>Home</button>    
    <button onClick={() => setText(<div>Landing</div>)}>Landing</button>    
    <button onClick={() => setText(<div>About</div>)}>About</button>
    {text}

    <button style={{backgroundColor:'lightgreen'}} onClick={() => setPageName("Home2")}>Home</button>    
    <button style={{backgroundColor:'lightgreen'}} onClick={() => setPageName("Lending")}>Lending</button>    
    <button style={{backgroundColor:'lightgreen'}} onClick={() => setPageName("About")}>About</button>    

    {pageName === 'Home2' && <div>Text is here</div>}
    {/* {pageName === 'Home2' ? <div>Text is here</div> : null} */}
    {pageName === 'Lending' && <div><button>Click here</button></div>}
    {/* {pageName === 'About' && <div><input type ='text' placeholder = 'Text is here'/></div>} */}
    < hr/>
    
    <input type='text' value={inputValue2} onChange={(e) => 
      {setInputValue2(e.target.value);
      console.log('list', list)} }/>
      {inputValue2.length < 3 && <div>Min 3 char</div>}
{/*       // ha value kisebb, mint három, akkor mutassa a div-et */}

{/*        {value.length >= 3 ? <button>Submit</button> : <button disabled>Submit</button> */}
        
      {<button disabled={inputValue2.length < 3}>Submit</button>}
      
      
      {/* {cars.filter(car => car.brand.slice(0, inputValue2.length) === inputValue2).map((car, index) => <div key={index}> */}
      {cars.filter(car => car.brand.startsWith(inputValue2)).map((car) => <div key={car.model}>
        <b>{car.brand}</b> - {car.model} ({car.topSpeed})
      </div>)}
      

  </div>  
  );
  
}

export default App;
