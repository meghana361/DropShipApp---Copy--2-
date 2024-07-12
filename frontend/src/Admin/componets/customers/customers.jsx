// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Avatar, CardHeader, Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const rows = [
  {
    age: 27,
    status: 'current',
    date: '09/27/2018',
    name: 'Ramesh',
    salary: '$19586.23',
    email: 'Ramesh333@gmail.com',
    designation: 'Human Resources Assistant',
    image:"https://th.bing.com/th/id/OIP.qdLCAzyzGKgkYKEtwZ_fnQHaHa?pid=ImgDet&w=474&h=474&rs=1"
  },
  {
    age: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'professional',
    name: 'Madhu',
    email: 'Mad@gmail.com',
    designation: 'Nuclear Power Engineer',
    image:"https://i0.wp.com/florafoods.in/wp-content/uploads/2021/08/Midigayi-Pickle-1.jpg?fit=650%2C488&ssl=1"
  },
  {
    age: 59,
    date: '10/15/2017',
    name: 'Ajay',
    status: 'rejected',
    salary: '$18991.67',
    email: 'Ajay45@gmail.com',
    designation: 'Environmental Specialist',
    image:"https://i0.wp.com/insaneinthebrine.com/wp-content/uploads/2020/09/probiotic_relish4.jpg?fit=750%2C1028&ssl=1"
  },
  {
    age: 30,
    date: '06/12/2018',
    status: 'resigned',
    salary: '$19252.12',
    name: 'Ranjitha',
    email: 'ranju45@gmail.com',
    designation: 'Sales Representative',
    image:"https://th.bing.com/th/id/OIP.jHFu1MRpoj5mwqC__NRe9wAAAA?rs=1&pid=ImgDetMain"
  },
  {
    age: 66,
    status: 'applied',
    date: '03/24/2018',
    salary: '$13076.28',
    name: 'Anisha',
    designation: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    image:"https://th.bing.com/th/id/OIP.cFGueAi5xqt3UJIVgS2e-wHaHT?rs=1&pid=ImgDetMain"
  },
  {
    age: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Amala',
    status: 'professional',
    designation: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp'
  }
]



const Customers = () => {
  const navigate=useNavigate();
  function handlePaginationChange(event, value) {
    console.log("Current page:", value);
  }
  return (
    <Box>
         <Card>
      <CardHeader
          title='All Customers'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          
        />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0,10).map((item,index) => (
              <TableRow hover key={item.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>{index+1}</TableCell>
                <TableCell> <Avatar alt={item.name} src={item.image} /> </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                
                
               
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
    <Card className="mt-2 felx justify-center items-center">
        <Pagination
          className="py-5 w-auto"
          size="large"
          count={10}
          color="primary"
          onChange={handlePaginationChange}
        />
      </Card>
    </Box>
   
  )
}

export default Customers;
