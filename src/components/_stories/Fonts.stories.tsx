import React from 'react';
import theme from '@src/theme';
import { Flex, Box, Text } from 'rebass';

export default {
  title: 'Theme/Fonts',
  component: Box,
};

const fonts: string[] = ['body', 'heading', 'monospace'];
const sizes: number[] = theme.fontSizes;

interface FontProps {
  weight: string;
}

export const All_Fonts = (props: FontProps) => {
  const { weight } = props;
  return (
    <>
      {fonts.map(f => (
        <Flex>
          <Box width={1 / 4} p={2} my={1} bg="primary" color="white">
            {f}
          </Box>
          <Box width={3 / 4}>
            {sizes.map((val, i) => (
              <Box
                p={2}
                bg="background"
                color="text"
                fontFamily={f}
                fontSize={i}
                fontWeight={weight}
              >
                Size {i}: Lorem ipsum dolor sit amet
              </Box>
            ))}
          </Box>
        </Flex>
      ))}
    </>
  );
};

export const Weight_Body = () => <All_Fonts weight="body" />;

export const Weight_Heading = () => <All_Fonts weight="heading" />;

export const Weight_Bold = () => <All_Fonts weight="bold" />;

export const Variant_Heading = () => <Text variant="heading">Lorem ipsum dolor sit amet</Text>;

export const Variant_Display = () => <Text variant="display">Lorem ipsum dolor sit amet</Text>;

export const Variant_Caps = () => <Text variant="caps">Lorem ipsum dolor sit amet</Text>;
