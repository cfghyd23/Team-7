import React from 'react';
import { TextInput } from "@mantine/core";
import { useContext } from "react";
import { useState } from "react";
import { Button } from "@mantine/core";
import { Select } from "@mantine/core";
import { Box } from "@mantine/core";
import { Title } from "@mantine/core";
import { Image, Text } from "@mantine/core";
import { Link } from 'react-router-dom';
import { Register } from "./Register";
const Login = () => {
  return (
    <>
    <Box
      sx={(theme) => ({
        backgroundColor: "#ffffff",
        textAlign: "center",
        // padding: theme.spacing.m,
        borderRadius: "15px 50px",
        cursor: "pointer",
        height: "350px",
        width: "380px",
        position: "fixed",
        bottom: 300,
        right: 420,
        top: 120,
        border: "3px solid #777777",
        padding: "23px",
      })}
    >
      <Title order={3} sx={{ height: "50px" }}>
        Login
      </Title>
      <TextInput
        placeholder="Email"
        sx={{ height: "75px", width: "300px" }}
        label="Email"
        required
        // value={email}
        // onChange={updateEmail}
        // wrapperProps={{ autoComplete: "off" }}
        autoComplete="none"
      />
      <TextInput
        placeholder="Password"
        sx={{ height: "75px", width: "300px" }}
        label="Password"
        required
        type="password"
        // value={password}
        // onChange={updatePassword}
      />
      <Button
        color="grey"
        radius="md"
        size="xs"
        sx={{ marginTop: "5px" }}
        //onClick={handleSubmit}
      >
        Login
      </Button>
      <Text
        style={{ marginTop: "10px" }}
        // onClick={() => {
        //   props.setLoggedIn(0);
        //   props.setWhatToShow("register");
        // }}
      >
        Dont have an account ? <Link to="../Register" className="btn btn-primary">
        <b style={{color:"black"}}>Sign Up</b>
  </Link>
      </Text>
    </Box>
  </>
);
}

export default Login