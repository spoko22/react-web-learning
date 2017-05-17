import React from 'react';
import Box from 'grommet/components/Box';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import List from '../components/List';
import ListItem from '../components/ListItem';
import StyledParagraph from '../components/StyledParagraph';
import GeorgiaSpan from '../components/GeorgiaSpan';

export default () => (
    <Box full="horizontal">
        <Accordion size="small" active={0}>
            <AccordionPanel heading='Badanie otoczenia gospodarczego' style={styles.accordionPanelStyle}>
                <StyledParagraph>
                    <GeorgiaSpan/> prowadzi prace badawcze celem udzielenia odpowiedzi
                    co do obecnego stanu obszaru gospodarki i wpływu tego stanu na uwarunkowania
                    obecne oraz przyszłe.
                </StyledParagraph>

                <StyledParagraph>
                    Zakresem badania objęte są zagadnienia warunkujące prowadzenie działalności gospodarczej przez
                    podmioty polskie i zagraniczne.
                </StyledParagraph>

                <StyledParagraph>
                    W ramach badania otoczenia gospodarczego prowadzone są także, prace mające na celu właściwe
                    przygotowanie podmiotów zagranicznych, do ustanowienia oddziałów oraz przedstawicielstw lub/i
                    wprowadzenia produktów na rynek polski.
                </StyledParagraph>
            </AccordionPanel>
            <AccordionPanel heading='Badanie otoczenia społecznego' style={styles.accordionPanelStyle}>
                <StyledParagraph>
                    <GeorgiaSpan/> w ramach badania otoczenia społecznego, prowadzi prace mające
                    na celu właściwe zdiagnozowanie stanu aktualnego oraz trendów, co do oczekiwań społeczeństwa jako
                    zasobów pracowniczych.
                </StyledParagraph>

                <StyledParagraph>
                    Celem jest więc ustalenie korelacji pomiędzy oczekiwaniami społeczeństwa rozumianego jako
                    pracowniczych zasobów ludzkich, a potrzebami środowiska gospodarczego rozumianego jako potencjalnego
                    pracodawcę.
                </StyledParagraph>

                <StyledParagraph>
                    Wyniki badań społecznych pozwalają ustalić czy aktualne zasoby społeczne pozwolą konkretnemu
                    inwestorowi na efektywne prowadzenie działalności gospodarczej
                    w Polsce.
                </StyledParagraph>

                <StyledParagraph>
                    Wyniki te, pozwalają także na trafne i jednoznaczne określenie czy aktualny stan społeczny jest
                    kompatybilny z potrzebami gospodarki i czy zapewnia ona, satysfakcjonujące społeczeństwo, miejsca
                    zatrudnienia i rozwoju zawodowego.
                </StyledParagraph>
            </AccordionPanel>
            <AccordionPanel heading='Badanie otoczenia politycznego' style={styles.accordionPanelStyle}>
                <StyledParagraph>
                    <GeorgiaSpan/> prowadzi prace badawcze celem udzielenia odpowiedzi,
                    co do:
                    <List>
                        <ListItem light>obecnego stanu środowiska politycznego</ListItem>
                        <ListItem light>celów polityki poszczególnych środowisk politycznych</ListItem>
                        <ListItem light>wpływu (obecnego i przyszłego) celów polityki poszczególnych środowisk
                            politycznych na warunki prowadzenia działalności gospodarczej przez podmioty polskie jak i
                            zagraniczne.</ListItem>
                    </List>
                </StyledParagraph>
            </AccordionPanel>
            <AccordionPanel heading='Badanie otoczenia prawnego' style={styles.accordionPanelStyle}>
                <StyledParagraph>
                    <GeorgiaSpan/> we współpracy z kancelariami prawnymi grupy KPPiG podejmuje prace badawcze celem
                    udzielenia odpowiedzi co do:
                    <List>
                        <ListItem light>obecnego stanu prawnego</ListItem>
                        <ListItem light>przyszłego stanu prawnego ( w zakresie aktualnie prowadzonych
                            praclegislacyjnych)</ListItem>
                    </List>
                    na sytuację prawną podmiotów gospodarczych w Polsce.

                </StyledParagraph>
            </AccordionPanel>
            <AccordionPanel heading='Badanie stanu wiedzy' style={styles.accordionPanelStyle}>
                <StyledParagraph>
                    <GeorgiaSpan/> prowadzi prace badawcze celem udzielenia odpowiedzi co do:
                    <List>
                        <ListItem light>obecnego stanu wiedzy dyscyplin naukowych</ListItem>
                        <ListItem light>przyszłego stanu wiedzy dyscyplin naukowych (w zakresie aktualnie znanych faktów
                            badawczo-rozwojowych)</ListItem>
                    </List>
                    w korelacji do potrzeb podmiotów realizujących swoją aktywność gospodarczą na terytorium Polski.
                </StyledParagraph>
            </AccordionPanel>
        </Accordion>
    </Box>
);


const styles = {
    accordionPanelStyle: {
        textAlign: 'start'
    }
};