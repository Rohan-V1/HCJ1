import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  contact: number,
  designation: string,
  department: string,
  skills: string,

) {
  return { name, contact, designation, department, skills };
}



const rows = [
    createData('John Doe', '123-456-7890', 'Manager', 'Sales', ['Communication', 'Leadership']),
    createData('Jane Smith', '234-567-8901', 'Developer', 'Engineering', ['JavaScript', 'React']),
    createData('Alice Johnson', '345-678-9012', 'Designer', 'Design', ['Photoshop', 'UI/UX']),
    createData('Bob Brown', '456-789-0123', 'Data Scientist', 'Data Science', ['Python', 'Machine Learning']),
    createData('Charlie Green', '567-890-1234', 'HR Specialist', 'Human Resources', ['Recruitment', 'Conflict Resolution']),
  ];

export default function DenseTable() {

    function Click(a){
        alert(a)
    }
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="center">Skills</TableCell>
            <TableCell align="right"> Buttons  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="center">
              {row.skills.map((i)=>(
                    
                        <li>{i}</li>
                  
                )
            )}

              </TableCell>
              <TableCell align="right"> <button onClick={()=>Click(row.name)}>Click</button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
