import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const Leaderboard = () => {
  const users = [
    { name: 'John', fundsRaised: 1000 },
    { name: 'Jane', fundsRaised: 1500 },
    { name: 'Bob', fundsRaised: 800 },
    { name: 'Alice', fundsRaised: 1200 },
  ];

  return (
    <Box p={4}>
      <h1>Leaderboard</h1>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Funds Raised</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td>{user.name}</Td>
              <Td>{user.fundsRaised}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Leaderboard;
