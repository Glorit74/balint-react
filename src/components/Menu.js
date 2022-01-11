import pizza from './pizza'


function Menu() {
    return (
        <div className='menuContainer'>
            {pizza.map((p) => <div className='menu' key={p.id}>
                <div className='pizzaName'>{p.name}</div>
                <img src={p.picture} alt={p.name} />
                <div className='topping'><spam>Feltétek:</spam> {p.topping.map((t) => `${t}, `)}</div>
               
            </div>)}
        </div>
    )
}

export default Menu
