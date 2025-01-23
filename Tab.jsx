import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  {name:"Rakesh",Phone:"1234567",email:"Swjkd@gmail.com",address:"Manglore"},
  {name:"Rakesh",Phone:"1234567",email:"Swjkd@gmail.com",address:"Manglore"},
  {name:"Rakesh",Phone:"1234567",email:"Swjkd@gmail.com",address:"Manglore"}
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>sl</TableCell>
            <TableCell align="right" >Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {++index}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.Phone}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell align="right ">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
