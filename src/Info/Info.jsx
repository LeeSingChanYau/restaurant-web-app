import React from "react";
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import PhotoCarousel from "./PhotoCarousel";

const Info = () => {
    return (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ flexGrow: 1, color:"white"}}
          >
            <Typography variant="h5" component="div" sx={{marginTop:"5%", marginBottom:"10px"}}>
                Desde Hong Kong
            </Typography>
            <Typography variant="h6" component="div" sx={{width: "50%"}}>
            Cada plato que se sirve para nuestros clientes tiene que estar al estandár de nuestro chef Ming Fai Chan, provieniente
            de Hong Kong. Hong Kong es una ciudad orgullosa de su comida, y tiene una cultura foodie que busca nuevas experiencias
            culinarias cada día.
            </Typography>
            <PhotoCarousel />
          </Grid>
    )
}

export default Info;