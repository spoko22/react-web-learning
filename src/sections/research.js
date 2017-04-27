import React from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

export default () => (
    <Box full="horizontal">
        <Accordion size="small" active={0} >
            <AccordionPanel heading='Badanie otoczenia gospodarczego' style={styles.accordionPanelStyle}>
                <Paragraph style={styles.paragraphStyle}>
                    Instytut PL590 prowadzi prace badawcze celem udzielenia odpowiedzi co do obecnego stanu obszaru gospodarki
                    i wpływu tego stanu na uwarunkowania obecne oraz przyszłe co do prowadzenia działności gospodarczej przez podmioty polskie i zagraniczne.
                    W ramach badania otoczenia gospodarczego prowadzone są także badania mające na celu właściwe przygotowanie się podmiotów zagranicznych do ustanowienia oddziałów oraz przedstwicielstw oraz wprowadzenia produktów na rynek polski.
                </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading='Badanie otoczenia społecznego' style={styles.accordionPanelStyle}>
                <Paragraph style={styles.paragraphStyle}>
                    Instytut PL590 w ramach badania otoczenia społecznego prowadzone są badania mające na celu właściwe zdiagnozowanie stanu aktualnego i trendów co do oczekiwań społeczeństwa jako zasobów pracowniczych.  Celem jest więc ustalenie korelacji pomiędzy oczekiwaniami społeczeństwa rozumianego jako pracowniczych zasobów ludzkich, a potrzebami środowiska gospodarczego rozumianego jako potencjalnego pracodawcę. Wyniki badań społecznych pozwalają ustalić czy aktualne zasoby społeczne pozwolą konkretnemu inwestorowi na efektywne prowadzenie biznesu
                    w Polsce.
                </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading='Badanie otoczenia politycznego' style={styles.accordionPanelStyle}>
                <Paragraph style={styles.paragraphStyle}>
                    Instytut PL590 prowadzi prace badawcze celem udzielenia odpowiedzi co do obecnego stanu środowiska politycznego, celów polityki poszczególnych środowisk politycznych i ich obecnego i przyszłego wpływu na warunki prowadzenia działalnośći gosporczej przez podmioty polskie jak i zagraniczne.
                </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading='Badanie otoczenia prawnego' style={styles.accordionPanelStyle}>
                <Paragraph style={styles.paragraphStyle}>
                    Instytut PL590 we współpracy z kancelariami prawnymi grupy KPiD podejmuje prace badawcze celem udzielenia odpowiedzi co do wpływu stanu prawnego obecnego i przyszłego ( w zakresie prowadzonych prac legislacyjnych) na sytuację prawną podmiotów gospodarczych w Polsce.
                </Paragraph>
            </AccordionPanel>
            <AccordionPanel heading='Badanie stanu wiedzy' style={styles.accordionPanelStyle}>
                <Paragraph style={styles.paragraphStyle}>
                    Instytut PL590 prowadzi prace badawcze celem udzielenia odpowiedzi co do obecnego stanu wiedzy danej dyscypliny naukowej w korelacji do potrzeb podmiotów realizujacych swoja aktywność w Polsce.
                </Paragraph>
            </AccordionPanel>
        </Accordion>
    </Box>
);

const styles = {
    accordionPanelStyle: {
        textAlign: 'start'
    },
    paragraphStyle: {
        textAlign: 'justify'
    }
}