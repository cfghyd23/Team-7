import React from 'react';
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Select } from "@mantine/core";
import { Box } from "@mantine/core";
import { Title } from "@mantine/core";
import { Image } from "@mantine/core";

const Register = () => {
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
            />
            <TextInput
              placeholder="Email"
              sx={{ height: "75px", width: "300px" }}
              label="Email"
              required
            />
            <TextInput
              placeholder="Password"
              sx={{ height: "75px", width: "300px" }}
              label="Password"
              required
              type="password"
            />
            <Select
              label="Cause"
              sx={{ height: "75px", width: "300px" }}
              placeholder="Pick one"
              data={[
                { value: "Education", label: "Education" },
                { value: "Underprivilge", label: "AUnderprivilge" },
              ]}
            />
            <TextInput
              placeholder="Mobile Number"
              sx={{ height: "75px", width: "300px" }}
              label="Mobile Number"
              required
              
            />
            <Button
              color="#777777"
              radius="md"
              size="xs"
              sx={{ marginTop: "15px" }}
              
            >
              Register
            </Button>
          </Box>
        </>
      );
}

export default Register