import { useDispatch, useSelector } from "react-redux"


import { Typography, Grid, TextField, Button} from "@mui/material"
import { decrement, increment, incrementBy } from "../../../../../stote/slices/counter";

export const ContadorView = () => {
    const {counter}=useSelector(state=> state.counter)
    const dispatch = useDispatch();

  return (
    <Grid
    container direction='row' justifyContent='space-between' sx={{mb:1}} >
      <Grid item>
      
       <Typography fontSize={39} fontWeight={'light'}>count is:{counter}</Typography>
       </Grid>
          <Button type="button" onClick={()=>dispatch(increment())}>
        increment
    </Button>
  

    <Button type="button" onClick={()=>dispatch(decrement())}>
        Decrement
    </Button>
  
    <Button type="button" onClick={()=>dispatch(incrementBy(2))}>
        Increment by 2 
    </Button>

    </Grid>
   
  )
}
