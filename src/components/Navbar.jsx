import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../features/auth/authSlice";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.auth)

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <AppBar sx={{backgroundColor :"#496989"}}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily :'"Yellowtail", cursive' , fontWeight : "700", fontSize : "25px" }}>
            <Link to={"/"}>AUTH-APP</Link>
          </Typography>
          {!user ? (
            <>
              <Link to={"/register"}>
                <Button variant="contained" sx={{backgroundColor : "#B5C0D0", fontFamily : '"Merriweather", serif', fontSize : '15px'}}>
                  Register
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button
                  variant="contained"
                  sx={{ margin: "0px 10px" , backgroundColor : "#B3C8CF",  fontFamily : '"Merriweather", serif', fontSize : '15px'}}
                >
                  Login
                </Button>
              </Link>
            </>
          ) : (
            <Button variant="contained" color="error" onClick={handleLogout}>
              <LogoutIcon/>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
