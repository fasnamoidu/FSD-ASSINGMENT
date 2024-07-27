import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div><AppBar><Toolbar><br/><br/>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >Product App</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/home"><Button variant="contained">HOME</Button></Link>&nbsp;&nbsp;
        <Link to="/addpro"><Button variant="contained">ADD PRODUCT</Button></Link></Toolbar></AppBar>
    </div>
  )
}

export default Nav