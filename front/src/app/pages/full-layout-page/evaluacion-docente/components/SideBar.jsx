
import { TurnedInNot } from '@mui/icons-material'
import{Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid} from '@mui/material'
export const SideBar = ({drawerWidth=240}) => {
  return (
    <Box
    component='nav'
    sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}
    >
        <Drawer
        variant='permanent'
        open
        sx={{
            display:{xs:'block'},
            '&.MuiDrawer-paper':{boxSizing:'border-box', width:drawerWidth}
        }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Zully Gomez M
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['MATRICULA','GESTION DE NOTAS','EVALUACION DOCE'].map(text =>(
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container >
                                    <ListItemText primary={text}/>
                                    <ListItemText primary={'hkfdjkhfhskhfgkjk'}/>

                                </Grid>
                            </ListItemButton>
                        </ListItem>

                    ))
                }
            </List>
         
        </Drawer>

    </Box>
    
  )
}
