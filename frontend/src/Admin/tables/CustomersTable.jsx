// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Chip from '@mui/material/Chip'
// import Table from '@mui/material/Table'
// import TableRow from '@mui/material/TableRow'
// import TableHead from '@mui/material/TableHead'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import Typography from '@mui/material/Typography'
// import TableContainer from '@mui/material/TableContainer'
// import { Avatar, CardHeader } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

// const rows = [
//   {
//     age: 27,
//     status: 'current',
//     date: '09/27/2018',
//     name: 'Ramesh',
//     salary: '19586.23',
//     email: 'ramesh@gmail.com',
//     designation: 'Human Resources Assistant',
//     image:"https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70"
//   },
//   {
//     age: 61,
//     date: '09/23/2016',
//     salary: '23896.35',
//     status: 'professional',
//     name:'vivek',
//     email: 'vivke@gmail.com',
//     designation: 'Nuclear Power Engineer',
//     image:"https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70"
//   },
//   {
//     age: 59,
//     date: '10/15/2017',
//     name: 'Minnie Roy',
//     status: 'rejected',
//     salary: '$18991.67',
//     email: 'ediehn6@163.com',
//     designation: 'Environmental Specialist',
//     image:"https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70"
//   },
//   {
//     age: 30,
//     date: '06/12/2018',
//     status: 'resigned',
//     salary: '$19252.12',
//     name: 'Ralph Leonard',
//     email: 'dfalloona@ifeng.com',
//     designation: 'Sales Representative',
//     image:"https://rukminim1.flixcart.com/image/832/832/xif0q/lehenga-choli/c/v/q/free-half-sleeve-sadhna-kedar-fab-original-imagpawdqwjqz6vt.jpeg?q=70"
//   },



  
// ]

// const statusObj = {
//   applied: { color: 'info' },
//   rejected: { color: 'error' },
//   current: { color: 'primary' },
//   resigned: { color: 'warning' },
//   professional: { color: 'success' }
// }

// const CustomersTable = () => {
//   const navigate=useNavigate();
//   return (
//     <Card>
     
//       <TableContainer>
//         <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
//           <TableHead>
//             <TableRow>
//             <TableCell>Image</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
              
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(0,5).map(item => (
//               <TableRow hover key={item.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
//                 <TableCell> <Avatar alt={item.name} src={item.image} /> </TableCell>
//                 <TableCell>{item.name}</TableCell>
//                 <TableCell>{item.email}</TableCell>
                
                
               
               
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Card>
//   )
// }

// export default CustomersTable
