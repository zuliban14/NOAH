import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography, Grid } from '@mui/material'
import React from 'react'

export const NavBar = ({drawerWidth}) => {//llega el espacio del menuLateral
  return (
    <AppBar 
    position='fixed'
    sx={{
        width:{sm:`calc(100% - ${drawerWidth}px)`},//se resta el espacio del menu lateral 
        ml:{sm:`${drawerWidth}px`}
    }}
    >
        <Toolbar>
            <IconButton 
            color='inherit'
            edge="start"
            sx={{mr:2, display:{sm:'none'}}}
            >
              <MenuOutlined/>
            </IconButton>
            <Grid container derection='row' justifyContent='space-between' alagnItems='center'>
              <Typography variant='h6' noWrap component='div'>Noa</Typography>
              <IconButton  color="customColor1">
                <LogoutOutlined />
              </IconButton>
            </Grid>
            
        </Toolbar>

    </AppBar>
  )
}
