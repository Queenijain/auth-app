import React, { useEffect } from "react";
import { Container, LinearProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <>
      <Typography variant="h4" align="center" sx={{ height : "80vh", display : "flex" , alignItems :"center", justifyContent:"center",fontFamily : '"Permanent Marker", cursive', fontWeight : "700", color : "#496989" }}>
       YOU SUCCESSFULLY LOGGED IN!!
      </Typography>
    </>
  );
};

export default Home;
