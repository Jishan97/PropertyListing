import React from "react";
import { Grid } from '@mui/material'

// const useStyles = makeStyles((theme) => ({
//   mainLeftBg: {},
// }));

const FormContainer = (props) => {
  // const classes = useStyles();
  return (
    <div>
      <Grid container >
        <Grid>
          <div>
            <h1>this is form</h1>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormContainer;
