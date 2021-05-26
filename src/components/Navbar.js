import React from "react";
import { AppBar, Button, Toolbar, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../util/const";

function Navbar() {
  const user = false;
  return (
    <AppBar
      style={{ background: "linear-gradient(-45deg, #39249a, #e14e42)" }}
      position="static"
    >
      <Toolbar variant="dense">
        <h3>Samar Badriddinov</h3>
        <Grid container justify={"flex-end"}>
          {user ? (
            <Button variant={"outlined"}>Quit</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
