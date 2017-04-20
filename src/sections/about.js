import React from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

export default () => (
  <Box style={styles}>
  <Paragraph>
  Podstawowym zakresem działania
Instytutu PL590
są badania naukowe i prace rozwojowe w dziedzinie nauk społecznych i humanistycznych,
w korelacji do uwarunkowiań społecznych, politycznych, prawnych, technicznych
oraz edukacyjnych
w jakich działają polscy porzedsiebiorcy,
polskie firmy oraz polscy profesjonaliści.
Służą one polskiemu środowisku gospodarczemu jak
i instytucjom państwowym.
Prace te pozwalają ustalić otoczenie środowiskowe
o szerokim zakresie, w jakich działają polskie podmioty gospodarcze
i polscy profesjonaliści.
</Paragraph>
<Paragraph>
Konkluzje z prowadzonych prac badawczo-rozwojowych umożliwiają trafne identyfikowanie mocnych
i słabych stron polskich
przedsiębiorstw oraz polskich profesjonalistów,
a także polskich produktów,
stanu wiedzy.
Pozwalają uwzględnić
w strategii ich działania
zidentyfikowane ryzyka,
a co za tym idzie,
prawidłowo ustalić,
wymaganą strategię postępowania
z uwzględnieniem istniejących
w otoczeniu gospodarcztym
możliwości i szans.
</Paragraph>
<Paragraph>
Konkluzje z prowadzonych prac badawczo-rozwojowych
pozwalają także, na trafne identyfikowanie, porządanych przez środowisko gospodarcze, działań istytucji państwowych.
Ułatwia to instytucjom Państwa podejmowanie trafnych decyzji
w tym zakresie.
  </Paragraph>
  </Box>
);

const styles = {
  textAlign: 'justify'
}
