import React from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Header from 'grommet/components/Header';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

import AboutSection from './sections/about';
import Location from './sections/location';

import ScrollableAnchor, { removeHash } from 'react-scrollable-anchor';

export default () => (
  <App>
    <Header fixed='true'>
      <Title>
        Title
      </Title>
      <Box flex={true} justify='end' direction='row'>
        <Menu direction='row'>
          <Anchor href='#section1' onClick={()=>removeHash()}> O instytucie </Anchor>
          <Anchor href='#section2' onClick={()=>removeHash()}> Prace badawcze </Anchor>
          <Anchor href='#section3' onClick={()=>removeHash()}> Lokalizacja </Anchor>
        </Menu>
      </Box>
    </Header>
    <Article>
      <ScrollableAnchor id={'section1'}>
      <Section pad='large'
        justify='center'
        align='center'
        full='vertical'>
        <Headline margin='none'>
          Section 1
        </Headline>
      </Section>
      </ScrollableAnchor>
      <ScrollableAnchor id={'section2'}>
      <Section pad='large'
        justify='center'
        align='center'
        full='vertical'
        colorIndex='grey-4'>
        <Headline margin='none'>
          IPL590
        </Headline>
        <AboutSection />
      </Section>
      </ScrollableAnchor>
      <ScrollableAnchor id={'section3'}>
      <Section pad='large'
        justify='center'
        align='center'
        full='true'>
        <Headline margin='none'>
          Lokalizacja siedziby
        </Headline>
        <Location />
      </Section>
      </ScrollableAnchor>
    </Article>
  </App>
);
