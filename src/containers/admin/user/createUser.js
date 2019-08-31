import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { TextField, Grid } from "@material-ui/core";
export default class createUser extends Component {
  render() {
    return (
      <div>
          <Grid container>
              {/* <Grid xs={12}> */}
                  <Grid xs={3}>
        <TextField
          id="outlined-dense"
          label="First name"
          margin="dense"
          variant="outlined"

        />
        </Grid>
        <Grid xs={3}>
         <TextField
          id="outlined-dense"
          label="Father's name"
          margin="dense"
          variant="outlined"

        />
        </Grid>
        <Grid xs={3}>
         <TextField
          id="outlined-dense"
          label="Grand Fathers name"
          margin="dense"
          variant="outlined"

        />
        </Grid>
        </Grid>
       
        {/* </Grid> */}
      </div>
    );
  }
}
