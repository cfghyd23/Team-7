import React from 'react';
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { FaUserGraduate } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import {Leaderboard} from './Leaderboard';
import {Intern} from './Intern';

const Header = () => {
  const logoUrl = "https://static.wixstatic.com/media/2cdbfc_4a8be7850de94634be22c34df4d056b5~mv2_d_5000_3709_s_4_2.png";

  return (
    <Box bg="blue.200" width="250px" p={4} boxShadow="md" height="100vh" position="fixed">
      {/* Logo and Heading */}
      <Flex alignItems="center" mb={4}>
        <Image src={logoUrl} alt="Logo" boxSize="40px" mr={2} />
        <Heading as="h1" size="lg" fontWeight="bold" ml={2}>
          Marpu
        </Heading>
      </Flex>
      {/* Admin Panel Heading */}
      <Text fontSize="sm" fontWeight="bold" mb={2}>
        Intern Dashboard
      </Text>
      {/* Admin Panel Menu */}
      <Box>
        <ul style={{marginLeft:'20px'}}>
        <li style={{paddingBottom:'10px'}}><Link to="./intern">Status</Link></li>
        <li style={{paddingBottom:'10px'}}><Link to="./Leaderboard">LeaderBoard</Link></li>
        <li style={{paddingBottom:'10px'}}><Link to="./orientation">Orientation</Link></li>
        <li style={{paddingBottom:'10px'}}><Link to="./cerificates">Certificates</Link></li>
        </ul>
        {/* Add other menu items here */}
      </Box>
    </Box>
  );
};

export default Header;
