import React, { useContext } from "react";
import { AppBar, Button, Toolbar, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../util/const";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

function Navbar() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar
      style={{ background: "linear-gradient(-45deg, #39249a, #e14e42)" }}
      position="static"
    >
      <Toolbar variant="dense">
        <h3>Samar Badriddinov</h3>
        <Grid container justify={"flex-end"}>
          {user ? (
            <Button onClick={() => auth.signOut()} variant={"outlined"}>
              EXIT
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>LOGIN</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
