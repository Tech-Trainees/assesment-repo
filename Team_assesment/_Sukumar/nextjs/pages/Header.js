import { width } from '@mui/system'
import {Box,Badge,IconButton,styled} from '@mui/material'
import React, { useState } from 'react'
import { ProductsList } from './Plp'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export function Header() {
   const [count,setCount] = React.useState(1)
   const [addquantity,setQuantity] = useState(0)

   const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }));
  return (
     <div>
        <Box sx={{height:100, width: 'auto', backgroundColor: 'black'}} component='div' >
            <IconButton aria-label="cart" color='secondary'>
               <StyledBadge badgeContent={count} color="primary" >
                  <ShoppingCartIcon />
               </StyledBadge>
            </IconButton>
        </Box>
         
        <ProductsList 
         count={count} setCount={setCount}
         addquantity={addquantity}
         setQuantity = {setQuantity}
        />
     </div>
  )
}
