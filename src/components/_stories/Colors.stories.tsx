import React from 'react';
import { Flex, Box } from 'rebass';

export default {
  title: 'Theme/Colors',
  component: Box,
};

const colors: string[] = [
  'text',
  'background',
  'primary',
  'secondary',
  'muted',
  'gray',
  'highlight',
];

export const All = () => (
  <>
    {colors.map(c => (
      <Flex m={2}>
        <Box width={1 / 4} p={2} bg="primary" color="white">
          {c}
        </Box>
        <Box width={3 / 4} p={2} bg={c}></Box>
      </Flex>
    ))}
  </>
);
