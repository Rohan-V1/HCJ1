import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="column"sx={{textAlign: "center", margin: "auto"}}>
      <Button variant="text" sx={{width: '100px'}}>Text</Button>
      <Button variant="contained" sx={{backgroundColor:"orange",width: '100px'}}>Contained</Button>
      <Button variant="outlined" sx={{width: '100px'}}>Outlined</Button>
    </Stack>
    
  );
}
