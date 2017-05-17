import React from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import Header from 'grommet/components/Header';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import GeorgiaSpan from './components/GeorgiaSpan';

import AboutSection from './sections/about';
import Location from './sections/location';
import ResearchSection from './sections/research';

import ScrollableAnchor, {removeHash, goToTop, goToAnchor} from 'react-scrollable-anchor';

export default () => (
    <App>
        <Header fixed='true'>
            <Box flex={true} margin="medium">
            <Anchor href="#" onClick={() => removeHash()}>
                <Title>
                    Instytut PL 590
                </Title>
            </Anchor>
            </Box>
            <Box alignContent="end">
            <Menu direction='row' justify="end" dropAlign={{top:'top', right: 'right'}}>
                <Anchor href='#section1' onClick={() => removeHash()}> O instytucie </Anchor>
                <Anchor href='#section2' onClick={() => removeHash()}> Prace badawcze </Anchor>
                <Anchor href='#section3' onClick={() => removeHash()}> Lokalizacja </Anchor>
            </Menu>
            </Box>
        </Header>

        <Article>
            <Section pad='large'
                     justify='center'
                     align='center'
                     size={{width: 'full', height: 'medium'}}
                     colorIndex='neutral-4-a'>
                <Headline margin='none' style={{textAlign: 'center'}}>
                    <span>INSTYTUT PL 590</span>
                </Headline>
            </Section>
            <ScrollableAnchor id={'section1'}>
                <Section pad='large'
                         justify='center'
                         align='center'
                         full='vertical'>
                    <Headline margin='large' className="brand-color-font">
                        O Instytucie PL 590
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
                    <Headline margin='none' className="brand-color-font">
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
