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

//  const [texes, setText] = useState('About')
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
    {pageName === 'Lending' && <div><button>Click here</button></div>}
    {pageName === 'About' && <div><input type ='text' placeholder = 'Text is here'/></div>}
  </div>  
  );
}

export default App;
