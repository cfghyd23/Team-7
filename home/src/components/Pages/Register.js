import React from 'react';
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Select } from "@mantine/core";
import { Box } from "@mantine/core";
import { Title } from "@mantine/core";
import { Image } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
 
export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");
  const [cause, setCause] = useState("");
 
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePassChange = (event) => {
    setPass(event.target.value);
  };
  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  const handleCausehange = (event) => {
    setCause(event.target.value);
  };
 
  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:8000/interns/register/", {
      name: name,
      email: email,
      mobile: mobile.toString(),
      password: pass,
    });
    console.log(response);
  };
    return (
        <>
          <Box
            sx={(theme) => ({
              backgroundColor: "#ffffff",
              textAlign: "center",
              // padding: theme.spacing.m,
              borderRadius: "15px 50px",
              cursor: "pointer",
              height: "95%",
              width: "360px",
    
              position: "absolute",
              zIndex: 1,
    
              right: 420,
              border: "3px solid #777777",
              padding: "30px",
              top: 20,
            })}
          >
            <Title order={3} sx={{ height: "50px" }}>
              Register
            </Title>
    
            <TextInput
              placeholder="Full Name"
              sx={{ height: "75px", width: "300px", textAlign: "center" }}
              label="Name"
              size="sm"
              required
              value={name}
              onChange={handleNameChange}
            />
            <TextInput
              placeholder="Email"
              sx={{ height: "75px", width: "300px" }}
              label="Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <TextInput
              placeholder="Password"
              sx={{ height: "75px", width: "300px" }}
              label="Password"
              required
              type="password"
              value={pass}
              onChange={handlePassChange}
            />
            {/* <Select
              label="Cause"
              sx={{ height: "75px", width: "300px" }}
              placeholder="Pick one"
              value={cause}
              onChange={handleCausehange}
              data={[
                { value: "Education", label: "Education" },
                { value: "Underprivilge", label: "AUnderprivilge" },
              ]}
            /> */}
            <TextInput
              placeholder="Mobile Number"
              sx={{ height: "75px", width: "300px" }}
              label="Mobile Number"
              required
              value={mobile}
              onChange={handleMobileChange}
              
            />
            <Button
              color="#777777"
              radius="md"
              size="xs"
              sx={{ marginTop: "15px" }}
              onClick={() => {
                handleSubmit();
                //props.setWhatToShow("login");
              }}
            >
              Register
            </Button>
          </Box>
        </>
      );
}