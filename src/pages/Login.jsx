import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Container,
  LinearProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (isError || message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress />
      </Container>
    );
  }
  return (
    <Container sx={{backgroundColor : "#607274" , padding : "40px" , margin : "40px 0px"}}>
      <Card sx={{backgroundColor : "#B6BBC4"}}>
        <CardContent>
          <Typography variant="h6" align="center" sx={{color : "#607274" , fontSize : "25px", fontWeight : "600", fontFamily : '"Lugrasimo", cursive'}}>
            LOGIN HERE...
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Email"
              type="Email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Password"
              type="Password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" fullWidth sx={{backgroundColor : "#607274", fontWeight : "500"}}>
              LOGIN
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
