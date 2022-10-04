import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Box, Button } from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{  borderBottom: 1,  
        borderColor: 'divider', 
        justifyContent: 'center',  
        height: 40,  
        borderRadius: 20,
        backgroundColor: 'rgb(35, 35, 35)',
        fontSize: 18,
          }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  >
          <Tab label="Buy in Rupees"  {...a11yProps(0)} />
          <Tab label="Buy in Grams"  {...a11yProps(1)}/>
         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box component='button' 
        sx={{color:'green',backgroundColor:'pink', border: 'none', borderRadius: 5, cursor: 'pointer'}}>
          Item One
        </Box>
     
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box >
          <Button sx={{ border: '1px dashed grey' }}>Save</Button>
        </Box>
        Item Two
      </TabPanel>
    </Box>
  );
}
