import * as React from 'react';
import {Chip} from '@mui/material';
import Stack from '@mui/material/Stack';

export default function ClickableChips(props) {
  const {flag,chipamt,grams} = props

  let buy_in_rs = {
    amt1:2001,
    amt2:5001,
    amt3:10001,
  }
  let buy_in_grams = {
    gms1:0.5,
    gms2:1,
    gms3:2,
  }
  // let amt1=2001,amt2=5001,amt3=10001

  return (

    <Stack direction="row" spacing={4} style={{marginTop:15}}>
      <Chip 
      label={flag ? `₹${buy_in_rs.amt1}` : `${buy_in_grams.gms1}g`} 
      variant="outlined"  
      onClick={flag ? (()=>chipamt(buy_in_rs.amt1)) : (()=>grams(buy_in_grams.gms1))} 
      />

      <Chip 
        label={flag ? `₹${buy_in_rs.amt2}` : `${buy_in_grams.gms2}g`} 
        variant="outlined"
        onClick={flag ? (()=>chipamt(buy_in_rs.amt2)) : (()=>grams(buy_in_grams.gms2))} 
      />

      <Chip 
       label={flag ? `₹${buy_in_rs.amt3}` : `${buy_in_grams.gms3}g`} 
       variant="outlined" 
       onClick={flag ? (()=>chipamt(buy_in_rs.amt3)) : (()=>grams(buy_in_grams.gms3))} 
       />

    </Stack>
  );
}