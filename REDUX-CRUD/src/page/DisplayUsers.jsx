import { useSelector } from "react-redux";
import "./user.css";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { useState } from "react";
import { Button } from "@mui/material";
import {Link} from 'react-router-dom'


export default function DisplayUsers() {
  const users = useSelector((state) => state.users);
  const [userData, setUserData] = useState(users);
  console.log(users);
  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
         <h1
        style={{
          textAlign: "center",
          backgroundColor: "blueviolet",
          borderRadius: "10px",
          padding: "10px",
          color: "white",
        }}
      >
        User Data
      </h1>
      <Link to='/createnewuser'> Create User </Link>
     
      <Table>
        {/* Table head */}
        <TableHead>
          <TableRow>
            <TableCell className="headerCell">Id</TableCell>
            <TableCell className="headerCell">Name</TableCell>
            <TableCell className="headerCell">Email</TableCell>
            <TableCell className="headerCell">Action</TableCell>
          </TableRow>
        </TableHead>

        {/* Table body */}
        <TableBody>
          {userData.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell className="tableCell">{user.id}</TableCell>
                <TableCell className="tableCell">{user.name}</TableCell>
                <TableCell className="tableCell">{user.email}</TableCell>
                <TableCell className="tableCell ">
                  <span className="btn">
                  <Link to='/update-user-data'><Button variant="contained">Edit</Button></Link>
                  <Button variant="contained" color="error" >
                    Delete
                  </Button>
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
