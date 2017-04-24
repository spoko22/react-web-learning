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
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';

import AboutSection from './sections/about';
import Location from './sections/location';
import ResearchSection from './sections/research';

import ScrollableAnchor, {removeHash, goToTop, goToAnchor} from 'react-scrollable-anchor';

export default () => (
    <App >
        <Header fixed='true'>
            <Anchor href="#" onClick={() => removeHash()}>
                <Title>
                    Instytut PL 590
                </Title>
            </Anchor>
            <Box flex={true} justify='end' direction='row'>
                <Menu direction='row'>
                    <Anchor href='#section1' onClick={() => removeHash()}> O instytucie </Anchor>
                    <Anchor href='#section2' onClick={() => removeHash()}> Prace badawcze </Anchor>
                    <Anchor href='#section3' onClick={() => removeHash()}> Lokalizacja </Anchor>
                </Menu>
            </Box>
        </Header>

        <Article>
            {/*<ScrollableAnchor id={'section1'}>*/}
            <Section pad='large'
                     justify='center'
                     align='center'
                     size={{width: 'full', height: 'medium'}}
                     colorIndex='light-2'>
                <Headline margin='none'>
                    INSTYTUT PL 590
                </Headline>
            </Section>
            {/*</ScrollableAnchor>*/}
            <ScrollableAnchor id={'section1'}>
                <Section pad='large'
                         justify='center'
                         align='center'
                         full='vertical'>
                    <Headline margin='none'>
                        O instytucie
                    </Headline>
                    <AboutSection />
                </Section>
            </ScrollableAnchor>
            <ScrollableAnchor id={'section2'}>
                <Section pad='large'
                         justify='center'
                         align='center'
                         full='vertical'
                         colorIndex='grey-4'>
                    <Headline margin='none'>
                        Prace badawcze
                    </Headline>
                    <ResearchSection />
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
            <Section pad='small'
                     justify='center'
                     align='center'
                     size={{width: 'full', height: 'xsmall'}}
                     colorIndex='grey-4'>
                <Paragraph pad='none' margin="none">
                    Kontakt:  e-mail: biuro@iPL590.org.pl
                </Paragraph>
                <Paragraph pad='none' margin="none">
                    Instytut PL590-KP&D Sp. z o.o.; ul. Poznańska 39/17 ; 00-689 Warszawa ;
                </Paragraph>
                <Paragraph pad='none' margin="none">
                    NIP: 525-233-08-86;  KRS:0000235992
                </Paragraph>
            </Section>
        </Article>
    </App>
);
