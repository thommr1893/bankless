import React from 'react'
import { Container, VStack } from '@chakra-ui/react'

import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';

class Home extends React.Component {
  render() {
    return (
      <Container maxW={{ base: 'container.sm', md: 'container.xl' }}>
        <VStack rowGap={4}>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </VStack>
      </Container>
    )
  }
}

export default Home
