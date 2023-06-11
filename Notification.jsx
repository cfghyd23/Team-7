import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Badge,
  Text,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheck, FaEye, FaBell } from 'react-icons/fa';

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Add hardcoded notification message
    const hardcodedNotification = {
      id: 1,
      title: 'New Notification',
      description: 'Head over to the orientation section for further instructions.',
      read: false,
      date: new Date().toISOString(),
      category: 'General',
    };

    setNotifications([hardcodedNotification]);
  }, []);

  const handleMarkAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => {
        if (notification.id === id) {
          return { ...notification, read: true };
        }
        return notification;
      })
    );
  };

  const notificationBgColor = useColorModeValue('white', 'gray.700');
  const notificationHeadingColor = useColorModeValue('blue.600', 'blue.200');

  return (
    <Box
      position="fixed"
      top={0}
      right={0}
      width="300px"
      height="100vh"
      p={4}
      bg="white"
      boxShadow="md"
    >
      {/* Sidebar content */}
      <Flex alignItems="center" mb={4}>
        <Box as={FaBell} color="blue.500" fontSize="xl" mr={2} />
        <Heading as="h2" size="md" mb={0} color={notificationHeadingColor}>
          Notifications
        </Heading>
      </Flex>
      {/* Notification list */}
      {notifications.length === 0 ? (
        <Text color={'GrayText'}>No new notifications</Text>
      ) : (
        <Accordion allowToggle>
          {notifications.map((notification) => (
            <AccordionItem
              key={notification.id}
              borderBottom="1px"
              borderColor="gray.200"
            >
              {/* Accordion content */}
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading as="h3" size="sm" mb={1}>
                      {notification.title}
                    </Heading>
                    <Text>{notification.description}</Text>
                  </Box>
                  <Box>
                    {!notification.read && (
                      <IconButton
                        icon={<FaCheck />}
                        aria-label="Mark as Read"
                        variant="ghost"
                        onClick={() => handleMarkAsRead(notification.id)}
                        mr={2}
                      />
                    )}
                    <IconButton
                      icon={<FaEye />}
                      aria-label="View Details"
                      variant="ghost"
                    />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg={notificationBgColor}>
                <Text>Date: {notification.date}</Text>
                <Badge mt={2} variant="subtle" colorScheme="blue">
                  {notification.category}
                </Badge>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </Box>
  );
};

export default NotificationPanel;