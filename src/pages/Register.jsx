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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
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
    <Container sx={{backgroundColor : "#496989" , padding : "40px" , margin : "40px 0px"}}>
      <Card sx={{backgroundColor : "#B3C8CF"}}>
        <CardContent>
          <Typography variant="h5" align="center" sx={{color : "#496989" , fontFamily : '"Lugrasimo", cursive'}}>
            REGISTER HERE...
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              name="name"
              label="Name"
              type="Name"
              onChange={handleChange}
              value={name}
              required
              fullWidth
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              name="email"
              label="Email"
              type="Email"
              onChange={handleChange}
              value={email}
              required
              fullWidth
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              name="password"
              label="Password"
              type="Password"
              onChange={handleChange}
              value={password}
              required
              fullWidth
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              name="password2"
              label="Confirm Password"
              type="password"
              onChange={handleChange}
              value={password2}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" fullWidth sx={{backgroundColor : "#496989"}}>
              REGISTER
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;
