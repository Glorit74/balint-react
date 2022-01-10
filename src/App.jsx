const carName = 'Opel'
const carNumber = 125
const isCar = true
const cars = ['Opel', 'BMW', 12, 'Volvo', false]
const man = {
  fisrtName: 'Joe',
  lastName: 'Smith'
}
const nullVariable = null
let udVar = undefined
const myFv = () => {
  return 'Hello'
}

const carList = [
  {carName: 'Opel', doorNumber: 4},
  {carName: 'Skoda', doorNumber: 4},
  {carName: 'Mercedes', doorNumber: 4},
  {carName: 'BMW', doorNumber: 5},
  {carName: 'Trabant', doorNumber: 4}
]



const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p className="par">Ez egy <br /> szöveg</p>
      <p>{cars}</p>
      <p>{man.fisrtName} {nullVariable} {udVar}</p>
      {myFv()}
      <div id="egyedi">Ez egy autó {carName} {carNumber + 10} {isCar}</div>
      <input type="password" placeholder='minta.jozsi@gmail.com'/>

      <div className="carBrand">
        <p>Marka:</p>
        <p><em>Opel</em></p>
        <p>Ajtók száma: 4</p>
      </div>
      <div className="carBrand">
        <p>Marka:</p>
        <p><em>Volvo</em></p>
        <p>Ajtók száma: 5</p>
      </div>
      <div className="carBrand">
        <p>Marka:</p>
        <p><em>Trabant</em></p>
        <p>Ajtók száma: 4</p>
      </div>
      <div className="carBrand">
        <p>Marka:</p>
        <p><em>Skoda</em></p>
        <p>Ajtók száma: 4</p>
      </div>

      {
        carList.map((c) => 
        (
           <div key={c.carName} className={c.doorNumber === 5 ? 'carBrand' : 'carBrand2'} >
               <p>Marka:</p>
               <p><em>{c.carName}</em></p>
               <p>Ajtók száma: {c.doorNumber<5 ? c.doorNumber : 'Not valid'}</p>
             </div>
         )
       )
      }
    </div>
  );
}

export default App;
