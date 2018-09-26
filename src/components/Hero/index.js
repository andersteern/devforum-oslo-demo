import React from 'react';
import styled from 'styled-components';
import { Flex, Box, Card, Heading } from 'rebass';

const StyledHeading = styled(Heading)`
  text-shadow: 0px 0px 30px rgba(255, 255, 255, .7);
`;

const Hero = ({ children, img }) => (
  <Flex flexWrap='wrap' mx={-2}>
    <Box px={2} width={1}>
      <Card
        p={4}
        py={6}
        backgroundImage={`url(${img})`}
        backgroundSize='cover'
        borderRadius={0}
        color='white'
        bg='darkgray'
        >
        <StyledHeading
          textAlign='center'
          fontSize={[ 5, 6 ]}
          color='black'
        >
          { children }
        </StyledHeading>
      </Card>
    </Box>
  </Flex>
);
Hero.defaultProps = {
//   img: "https://c1.staticflickr.com/6/5163/5370376932_de34e93b5b_b.jpg",
  img: "https://c1.staticflickr.com/6/5708/23883363605_ee85370d6e_b.jpg",
};


export { Hero };
