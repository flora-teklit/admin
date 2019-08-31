import React, { Component, createRef } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import {
  SvgIcon,
  Tooltip,
  IconButton,
  createMuiTheme,
  Popper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Badge,
  Paper,
  Grow,
  Grid,
  Fab
} from "@material-ui/core";
import {
  Home,
  List,
  Notifications,
  Add,
  PeopleOutline
} from "@material-ui/icons";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import Profile from "../components/Profile";
import NotificationItem from "../components/NotificationItem";
import Login from "./Login";
import userList from "./admin/user/List";
//import Details from "./admin/user/PatientDetails";
//import Settings from "./admin/user/Settings";
import createUser from "./admin/user/createUser";
///import Admin from "./admin/Admin";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#4D848A" },
    secondary: { main: "#11cb5f" }
  }
});

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "50%",
    right: -3,
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNotification: false
    };
    this.anchorRef = React.createRef();
  }

  handleOpenNotification = e => {
    this.setState({
      openNotification: true
    });
  };

  handleCloseNotificationMenu = e => {
    if (this.anchorRef.current && this.anchorRef.current.contains(e.target)) {
      return;
    }

    this.setState({
      openNotification: false
    });
  };

  navigateToAdmin = () => {
    this.props.history.push("/admin/user/");
  };
  navigateToUserList = () => {
    this.props.history.push("/admin/user/List");
  };
  navigateToCreateUser = () => {
    this.props.history.push("/admin/user/createUser");
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ThemeProvider theme={theme}>
            <Grid container>
              <Grid item>
                <div className="left-nav">
                  <ul>
                    <li>
                      <IconButton onClick={() => this.navigateToAdmin()}>
                        <SvgIcon
                          style={{ fontSize: "2.2rem" }}
                          width="62.585"
                          height="81.649"
                          viewBox="0 0 62.585 81.649"
                        >
                          <g
                            id="Group_132"
                            data-name="Group 132"
                            transform="translate(-58.657 -987.571)"
                          >
                            <path
                              id="Path_162"
                              data-name="Path 162"
                              d="M89.95,988l-30.8,17.164v44.958l30.8-17.569Z"
                              transform="translate(0)"
                              fill="rgba(107,213,135,0.69)"
                              stroke="#fdffff"
                              strokeMiterlimit="10"
                              strokeWidth="0.5"
                            />
                            <path
                              id="Path_163"
                              data-name="Path 163"
                              d="M92.351,988l30.8,17.421V1050.2l-30.8-17.642Z"
                              transform="translate(-2.401)"
                              fill="#fe8c8c"
                              stroke="#fdffff"
                              strokeMiterlimit="10"
                              strokeWidth="0.5"
                            />
                            <path
                              id="Path_164"
                              data-name="Path 164"
                              d="M89.95,1036.043l-30.8,17.553,30.8,18.805,30.8-18.732Z"
                              transform="translate(0 -3.474)"
                              fill="#647777"
                              stroke="#fdffff"
                              strokeMiterlimit="10"
                              strokeWidth="0.5"
                            />
                          </g>
                        </SvgIcon>
                      </IconButton>
                    </li>

                    <li>
                      <IconButton onClick={() => this.navigateToAdmin()}>
                        <Tooltip
                          title="Home"
                          aria-label="Home"
                          placement="right"
                        >
                          <Home
                            style={{
                              color: "#fff",
                              "&:hover": {
                                color: "rgba(255, 255, 255, 0.54)"
                              }
                            }}
                          />
                        </Tooltip>
                      </IconButton>
                    </li>
                    <li>
                      <IconButton onClick={() => this.navigateToUserList()}>
                        <Tooltip title="Users List">
                          <PeopleOutline style={{ color: "#fff" }} />
                        </Tooltip>
                      </IconButton>
                    </li>
                  </ul>
                  <div className="profile">
                    <Profile {...this.props} />
                  </div>
                </div>
              </Grid>

              <Grid item style={{ width: "80%", margin: "0 auto" }}>
                <Route
                  path="/admin/user"
                  render={({ match: { url } }) => (
                    <>
                      <Route path={`${url}/`} component={userList} exact />
                      <Route path={`${url}/List`} component={userList}  />
                      {/* <Route path={`${url}/details`} component={Details} />
                      <Route path={`${url}/settings`} component={Settings} /> */}
                      <Route
                        path={`${url}/createUser`}
                        component={createUser}
                      />
                    </>
                  )}
                />
              </Grid>
            </Grid>
          </ThemeProvider>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Layout);
