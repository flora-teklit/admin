import React, { Component } from "react";
import {
  InputBase,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Button,
  IconButton,
  Grid,
  Paper,
  createMuiTheme
} from "@material-ui/core";

import { Search, MoreHoriz } from "@material-ui/icons";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "../../../styles/table.css";
import CardMedia from "@material-ui/core/CardMedia";
import { blue } from "@material-ui/core/colors";
const styles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  grow: {
    flexGrow: 1
  },
  icon: {
    color: "#fff",
    "&:hover": {
      color: "rgba(255, 255, 255, 0.54)"
    }
  },
  svgIconLogo: {
    fontSize: "2.2rem"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1)
    },
    marginRight: theme.spacing(2),
    marginLeft: "0px !important",
    flex: 1,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3)
      // width: 'auto',
    }
  },
  searchContainer: {
    paddingTop: 24,
    width: "75%",
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-start"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(0, 0, 0, 0.54)"
  },
  inputRoot: {
    color: "inherit",
    display: "flex"
  },
  inputInput: {
    padding: theme.spacing(1.4, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "2.1875em",
    [theme.breakpoints.up("md")]: {}
  },
  card: {
    display: 'flex',
   
    backgroundColor:blue
  },
  CardContent:{
    padding:5
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingBottom:10,
    marginBottom:10
  },
  col:{
    display: 'flex',
    flexDirection: 'row',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
 
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: "#4D848A" },
    secondary: { main: "#11cb5f" }
  }
});

class userList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "./download.jpg",
      selectedRow: -1,
      anchorEl: null,
      filterd: [],
      rows: [
        {
          id: 1,
          name: "Flora",
          email: "flora@gmail.com",
          address: "Mekelle",
          role: "user",
          phone: "0918",
          isActive: 0
        },
        {
          id: 2,
          name: "Rahwa",
          email: "rahwa@gmail.com",
          address: "Mekelle",
          role: "Admin",
          phone: "0908",
          isActive: 0
        },
        {
          id: 3,
          name: "Abel",
          email: "Abel@gmail.com",
          address: "Mekelle",
          role: "Super",
          phone: "0908",
          isActive: 0
        }
      ]
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  changeColor = selectedRow => e => {
    if (selectedRow !== undefined) {
      this.setState({ selectedRow });
    }
  };

  gotoActivateUser = () => {
    console.log(this.state.rows.isActive);
    this.setState({
      isActive: 1
    });
  };

  searchUser = e => {
    const ret = this.state.rows.filter(r => {
      return (
        r.name.toLocaleLowerCase().includes(e.target.value) ||
        r.phone.includes(e.target.value)
      );
    });

    this.setState({
      filterd: ret
    });
    console.log(ret);
  };

  render() {
    const { anchorEl } = this.state;
    const classes = { styles };
    const { imgSrc } = this.state;
    return (
      <div style={{ marginTop: 12, width: "55%", margin: "0 auto" }}>
        <ThemeProvider theme={theme}>
          <Grid container>
            <Grid item xs={12}>
              <div
                style={{
                  paddingTop: 24,
                  display: "flex"
                }}
              >
                <Paper
                  style={{
                    position: "relative",
                    flex: 1
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: "100%",
                      position: "absolute",
                      pointerEvents: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(0, 0, 0, 0.54)"
                      

                    }}
                  >
                    <Search />
                  </div>
                  <InputBase
                    placeholder="Search"
                    style={{
                      color: "inherit",
                      display: "flex",
                      padding: "11px 8px 8px 48px",
                      transition: "width",
                      width: "100%",
                  
                      
                    }}
                    onChange={this.searchUser}
                    inputProps={{ "aria-label": "Search" }}
                  />
                </Paper>
              </div>
            </Grid>
          </Grid>
{this.state.rows.map((row)=> (
          <Card className={classes.card} style={{ paddingBottom:10,
            marginBottom:10}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
       <Grid container spacing={3}>
        <Grid xs={4}></Grid>
         <Grid xs={4} >
          <Typography variant="caption" fontWeight="fontWeightLight" align="left"  display="block">
            name
          </Typography>
          <Typography variant="body1"  display="block" align="left" paragraph>
          {row.name}
									</Typography>
                  </Grid>
                  <Grid xs={4}>
          <Typography variant="caption" fontWeight="fontWeightLight" align="left" display="block" color="primary" >
          email
          </Typography>
          <Typography variant="body1" paragraph align="left" display="block"  >
          {row.email}
					</Typography>
          </Grid>
          <Grid xs={4}></Grid>
          <Grid xs={4}>
          <Typography variant="caption" fontWeight="fontWeightLight"  align="left" display="block">
            phone
          </Typography>
          <Typography variant="body1" align="left" paragraph >
          {row.address}
									</Typography>
          </Grid>
          <Grid xs={4}>
          <Typography variant="caption" fontWeight="fontWeightLight" align="left" display="block">
          role
          </Typography>
          <Typography variant="body1" paragraph align="left" display="block">
          {row.role}
									</Typography>
          </Grid>
          <Grid xs={4}></Grid>
          <Grid xs={8}>
          <Typography variant="caption" fontWeight="fontWeightLight" align="left" display="block">
            address
          </Typography>
          <Typography variant="body1"  align="left" display="block">
          {row.phone}
									</Typography>
          </Grid>
         </Grid>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
         <MoreHoriz />
          </IconButton>
          
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
))}
        </ThemeProvider>
      </div>
    );
  }
}

export default userList;
