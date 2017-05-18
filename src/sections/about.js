import React from 'react';
import StyledParagraph from '../components/StyledParagraph';
import Box from 'grommet/components/Box';
import GeorgiaSpan from '../components/GeorgiaSpan';

export default () => (
    <Box style={styles}>
        <StyledParagraph classes="brand-color-font">
            Podstawowym zakresem działania <GeorgiaSpan customText="Instytutu PL590"/> są badania naukowe
            i prace rozwojowe w dziedzinie nauk społecznych i humanistycznych,
            w korelacji do uwarunkowań: społecznych, politycznych, prawnych,
            technicznych oraz edukacyjnych.
        </StyledParagraph>
        <StyledParagraph classes="brand-color-font">
            Uwzględniają one podmiotowość polskich przedsiębiorców, polskich podmiotów gospodarczych oraz polskich
            profesjonalistów.
        </StyledParagraph>
        <StyledParagraph classes="brand-color-font">
            Służą one polskiemu środowisku gospodarczemu jak i instytucjom państwowym, a także zagranicznym środowiskom
            gospodarczym we właściwej ocenie potencjału rynku polskiego i gospodarki polskiej jako partnera
            gospodarczego.
        </StyledParagraph>
        <StyledParagraph classes="brand-color-font">
            Konkluzje z prowadzonych prac badawczo-rozwojowych umożliwiają trafne identyfikowanie mocnych i słabych
            stron polskich przedsiębiorstw oraz polskich profesjonalistów, a także polskich produktów, stanu wiedzy i
            rynku polskiego.
        </StyledParagraph>
        <StyledParagraph classes="brand-color-font">
            Prace te pozwalają także, uwzględnić w strategii ich działania, zidentyfikowane ryzyka, a co za tym idzie,
            prawidłowo ustalić, wymaganą strategię postępowania z uwzględnieniem istniejącego w otoczeniu gospodarczym
            potencjału i szans.
        </StyledParagraph>
        <StyledParagraph classes="brand-color-font">
            Konkluzje z prowadzonych prac badawczo-rozwojowych pozwalają także, na trafne identyfikowanie, pożądanych
            przez środowisko gospodarcze, działań instytucji państwowych.
            Ułatwia to instytucjom Państwa podejmowanie trafnych decyzji w tym zakresie.
        </StyledParagraph>
    </Box>
);

const styles = {
    textAlign: 'justify'
}
