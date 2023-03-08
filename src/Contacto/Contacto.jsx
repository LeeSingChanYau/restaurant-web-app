import React from "react";
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Contacto = () => {
    return (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ flexGrow: 1, color:"white"}}
          >
            <Typography variant="h5" component="div" sx={{marginTop:"5%"}}>
                Local Centro
            </Typography>
            <Typography variant="h5" component="div">
                Dirección: Maipu 314
            </Typography>
            <Typography variant="h5" component="div">
                Fono: 552 388888
            </Typography>
            <Typography variant="h5" component="div" sx={{marginTop:"5%"}}>
                Local Norte
            </Typography>
            <Typography variant="h5" component="div">
                Dirección: Los Chañares 291
            </Typography>
            <Typography variant="h5" component="div">
                Fono: 552 838888
            </Typography>
          </Grid>
    )
}

export default Contacto;