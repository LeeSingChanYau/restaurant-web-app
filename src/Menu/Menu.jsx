import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import data from '../data/data';


const Menu = ({numItems, items, setNumItems, setItems}) => {

    const addItemToCart = (item) => {
      const index = items.findIndex(i => i.name === item.name);
      setNumItems(numItems + 1)

      if (index === -1) {
        setItems(prevItems => [...prevItems, item]);
      } else {
        const updatedItems = [...items];
        updatedItems[index].count += 1;
        setItems(updatedItems)
      }
    }

    const entradas = data.filter((item) => item.type === "Entrada");
    const carnes = data.filter((item) => item.type === "Carne");
    const verduras = data.filter((item) => item.type === "Verduras");

    return(
        <div>
          <h1 className='food-type-text'>Entradas</h1>
          <Grid container style={{color: "white"}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {entradas.map((item, key) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={key}>
                <div style={{textAlign: "center", margin: 30}}>
                  <img className='food-image' src={item.img} alt={item.name}/>
                  <p>{item.name}</p>
                  <AddIcon className='add-icon' 
                  onClick={() => {
                    addItemToCart({name: item.name, price: item.price, count: 1, id: item.id})
                    }}/>
                </div>
              </Grid>
              );
            })}
          </Grid>
          <h1 className='food-type-text'>Carnes</h1>
          <Grid container style={{color: "white"}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {carnes.map((item, key) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={key}>
                <div style={{textAlign: "center", margin: 30}}>
                  <img className='food-image' src={item.img} alt={item.name}/>
                  <p>{item.name}</p>
                  <AddIcon className='add-icon' 
                  onClick={() => {
                    addItemToCart({name: item.name, price: item.price, count: 1, id: item.id})
                    }}/>
                </div>
              </Grid>
              );
            })}
          </Grid>
          <h1 className='food-type-text'>Verduras</h1>
          <Grid container style={{color: "white"}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {verduras.map((item, key) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={key}>
                <div style={{textAlign: "center", margin: 30}}>
                  <img className='food-image' src={item.img} alt={item.name}/>
                  <p>{item.name}</p>
                  <AddIcon className='add-icon' 
                  onClick={() => {
                    addItemToCart({name: item.name, price: item.price, count: 1, id: item.id})
                    }}/>
                </div>
              </Grid>
              );
            })}
          </Grid>
          
        </div>
    );
}

export default Menu;