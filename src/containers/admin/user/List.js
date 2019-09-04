import React, { Component } from "react";
import { download } from "./download.jpg";
import {
  InputBase,
  Card,
  CardContent,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Grid,
  Paper,
  createMuiTheme,
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Fab
} from "@material-ui/core";
import "../../../styles/App.css";
import { Search, MoreHoriz, Block } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "../../../styles/table.css";
import { blue, grey } from "@material-ui/core/colors";

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
    display: "flex",

    background: blue
  },
  CardContent: {
    padding: 5
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    paddingBottom: 10,
    marginBottom: 10
  },
  col: {
    display: "flex",
    flexDirection: "row"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  br: {
    display: Block,
    backgroundColor: blue
  }
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
          name: "Alex Weldu",
          email: "flora@gmail.com",
          address: "Mekelle",
          role: "User",
          phone: "0918",
          isActive: 0
        },
        {
          id: 2,
          name: "Rahwa Adisu",
          email: "rahwa@gmail.com",
          address: "Mekelle",
          role: "Admin",
          phone: "0908",
          isActive: 0
        },
        {
          id: 3,
          name: "Abel Abel",
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

    return (
      <ThemeProvider theme={theme}>
        <div>
          <div style={{ marginTop: 12, width: "55%", margin: "0 auto" }}>
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
                      flex: 1,
                      marginBottom: 25
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
                        width: "100%"
                      }}
                      onChange={this.searchUser}
                      inputProps={{ "aria-label": "Search" }}
                    />
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>

          {this.state.rows.map(row => (
            <div>
              <div>
                <Grid container spacing={3}>
                  <ExpansionPanel
                    style={{ width: "40%", marginBottom: "20px" }}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Grid xs={8}>
                        <Typography
                          variant="body1"
                          align="left"
                         
                        >
                          <Box borderBottom={1} borderColor="primary">
                            {row.name}
                          </Box>
                        </Typography>
                      </Grid>

                      <Grid xs={9} className="typo">
                        <Typography
                          variant="body1"
                          fontWeight="fontWeightLight"
                          align="right"
                          display="block"
                          color="primary"
                        >
                          {row.role}
                        </Typography>
                      </Grid>
                       
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell align="left">
                              {" "}
                              <Typography
                                variant="body1"
                                align="left"
                                color="textSecondary"
                                display="block"
                                align="left"
                              >
                                email:
                              </Typography>
                            </TableCell>
                            <TableCell  align="left" padding="checkbox">
                              <Typography
                                variant="body1"
                                align="left"
                                color="textSecondary"
                                display="block"
                                align="left"
                                fontSize="20"
                              >
                                {row.email}
                              </Typography>
                            </TableCell>
                            <TableCell >
                             
                            <IconButton
                        aria-owns={anchorEl ? "simple-menu" : null}
                        onClick={this.handleClick}
                        size="small"
                      ><Fab size="small">
                        <MoreHoriz />
                        </Fab>
                      </IconButton>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              {" "}
                              <Typography
                                variant="body1"
                                align="left"
                                color="textSecondary"
                                display="block"
                                align="left"
                              >
                                phone:
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="body1"
                                align="left"
                                color="textSecondary"
                                display="block"
                                align="left"
                              >
                                {row.phone}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              {" "}
                              <Typography
                                variant="body1"
                                align="left"
                                color="textSecondary"
                                display="block"
                                align="left"
                              >
                                address:
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="body1"
                                align="left"
                                color="textSecondary"
                                display="block"
                                align="left"
                              >
                                {row.address}
                              </Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow></TableRow>
                        </TableBody>
                      </Table>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>
              </div>
              <div className={classes.controls}>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  getContentAnchorEl={null}
                >
                  <MenuItem
                    onClick={(e, i) => {
                      this.setState({ anchorEl: null });
                      let filterd = this.state.filterd;
                      filterd.splice(i, 1);
                      console.log(" element index ", i);
                      this.setState({
                        filterd
                      });
                    }}
                  >
                    Delete
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>Activate</MenuItem>
                </Menu>
              </div>
            </div>
          ))}
        </div>
      </ThemeProvider>
    );
  }
}

export default userList;
