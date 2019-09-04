import React, { Component } from "react";
import {
  InputBase,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Grid,
  Paper,
  createMuiTheme,
 Menu, MenuItem, Button
} from "@material-ui/core";
import { Search, MoreHoriz } from "@material-ui/icons";
import { fade, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import '../../../styles/table.css';

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
      selectedRow:-1,
      anchorEl: null,
      filterd:[],
      rows: [
        {
          id:1,
          name: "Flora",
          email: "flora@gmail.com",
          address: "Mekelle",
          role: "user",
          phone: "0918",
          isActive:0
        },
        {

          id:2,
          name: "Rahwa",
          email: "rahwa@gmail.com",
          address: "Mekelle",
          role: "Admin",
          phone: "0908",
          isActive:0
        },
        {
          id:3,
          name: "Abel",
          email: "Abel@gmail.com",
          address: "Mekelle",
          role: "Super",
          phone: "0908",
          isActive:0
        }
      ]
    };
  }

  navigateToDetails = () => {
    this.props.history.push("/admin/details");
  };

  changeView = value => {
    console.log(value);
    //TODO: - Change this.state.rows to selected value
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

goto = (route) => {
this.props.history.push(route);
//MARK: - Close the menu
this.setState({
  anchorEl: null
})
}
// handleActivate=()=>{
//   this.setState({
//     isActive:true
//   })
// }
changeColor = selectedRow => e => {
  if (selectedRow !== undefined) {
    this.setState({ selectedRow  });
  }
};

gotoActivateUser=()=>{
  console.log(this.state.rows.isActive);
  this.setState({
    isActive:1
  })
}

searchUser=(e)=>{
  
  const ret=this.state.rows.filter(r=>{
    return r.name.toLocaleLowerCase().includes(e.target.value) || r.phone.includes(e.target.value);
  })

  this.setState({
    filterd:ret
  })
  console.log(ret);
}
update=(i)=>{
console.log(this.state.rows[i].name);

}
  render() {
    const { anchorEl } = this.state;
    return (
      <div style={{ marginTop: 12, width: "75%", margin: "0 auto" }}>
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
                      width: "100%"
                      
                    }}
                    onChange={this.searchUser}
                    inputProps={{ "aria-label": "Search" }}
                  />
                </Paper>
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Paper style={{ marginTop: 12, width: "100%",paddingTop:30 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Adress</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="tableHover">
                  {this.state.filterd.map((row,i)=> (
                    <TableRow key={i} 
                    onClick={this.changeColor(i)}
                    className={this.state.selectedRow === i ? "tableSelected" : "" }

                     >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.email}</TableCell>

                      <TableCell>{row.role}</TableCell>
                      <TableCell>{row.address}</TableCell>
                      <TableCell>{row.phone}</TableCell>
                      <TableCell align="right">
                        <IconButton
                         aria-owns={anchorEl ? "simple-menu" : null}
                          onClick={this.handleClick}
                          size="small"
                         
                          className={this.state.selectedRow === i ? "tableSelected" : "" }
                        >
                         
                            <MoreHoriz />
                         
                        </IconButton>
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
         
          <MenuItem  onClick={
            
            (e, i)=>{
              this.setState({ anchorEl: null });
              let filterd = this.state.filterd;
              filterd.splice(i, 1);
              console.log( ' element index ', i);
              this.setState({
                filterd
              });

              
            }
          }>Delete</MenuItem>
           <MenuItem onClick={this.handleClose}>Activate</MenuItem>
          
        </Menu>
                      </TableCell>
                      <TableCell>
                        <Button onClick={this.update(i)}> 
                          new
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
}

export default userList;
