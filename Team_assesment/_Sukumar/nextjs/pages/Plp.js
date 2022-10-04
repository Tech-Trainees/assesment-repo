import * as React from 'react'
import {styled,Grid,Typography,ButtonBase,ButtonGroup,Button,Box} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import productinfo from '../productsdata/products.json'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    minWidth: '100%'
})

export function ProductsList(props) {
    const [finallist,setFinallist] = React.useState([{}])
    const [cart,setCart] = React.useState([])

    const addtocart = (obj) => {
        setCart([...cart, obj])
    }
    const reduceCount = ( ) => {
        props.setCount(Math.max(props.count - 1, 0));
        if(props.addquantity < 0)
        {
            props.setQuantity(0)
        } 
        else props.setQuantity(props.addquantity - 1)
        
    }
    const incrementCount = () => {
        props.setCount(props.count+1)
        props.setQuantity(props.addquantity + 1)
       
    }
     const increasefun = (prod) => {
        incrementCount();
       
            addtocart({"id": prod.id,"itemName":prod.itemName,"quantityOrdered": props.addquantity+1,"price":prod.price,"category":prod.category});
           setFinallist(cart)
       for(let i= 0;i > cart.length;i++ ){
        for(let j=0;j>productinfo.length;j++){
            if(cart[i]["id"] === productinfo[j].id)
            setFinallist({"id": prod.id,"itemName":prod.itemName,"quantityOrdered": props.addquantity+1,"price":prod.price,"category":prod.category})
        }
     }
    }
    console.log("final "+JSON.stringify(finallist));
React.useEffect(() => {
    console.log(cart);
    console.log(props.addquantity);
   
},[cart])
    // React.useEffect(() => {
    //   fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').then(
    //     response => response.json()
    //   ).then(
    //     data => {
    //         console.log(data) 
            
    //     }).catch(function (error) {                       
    //           console.error(error);
    //       });
    // }, []);

    return(
        <>
            <Grid container spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            sx={{
                p:2,
                maxWidth: 'auto',
                flexGrow:1,
                
                
            }}>
            {productinfo.map((prod,index) => (
                <Grid item  m={1}  xs={12}  md={3} sm={4} key={index}
                    // sx={{border: '1px solid black'}} key={index}
                >
                <Grid item>
                    <ButtonBase sx={{width: 128,height: 140}} >
                        <Img alt='products' src={`/img/${prod.image}`} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid container direction='column'>
                        <Typography >
                            {prod.itemName}
                        </Typography>
                        
                        <Typography variant='subtitle2'>
                            Quantity: {prod.quantity}
                        </Typography>
                        <Grid item >
                            <Typography component='div'>
                            ₹{prod.price}
                            </Typography>
                        </Grid>
                    <Grid item>
                        {/* <Typography sx={{cursor: 'pointer'}}>-</Typography> */}
                        {/* <ButtonGroup> */}
                            <Button
                                aria-label="reduce"
                                onClick={() => {
                                    reduceCount();
                                }}
                            >
                                <RemoveIcon fontSize="small" />
                            </Button>
                            {props.addquantity}
                            <Button
                                aria-label="increase"
                                onClick={() => {
                                    increasefun({...prod})
    
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </Button>
                        {/* </ButtonGroup> */}
                    </Grid>

                    </Grid>
                    
                    </Grid>
                </Grid>
                    ))}
            </Grid>
        </>
        
    )
}