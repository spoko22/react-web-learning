import React from 'react';

import Box from 'grommet/components/Box';
import SimpleMap from '../components/SimpleMap';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';

const Location = () => (
    <Box direction="column" responsive="true" style={styles.marginTop} full="horizontal">
        <Box direction="row">
            <Image src='http://ipl590.org.pl/upload/201703/i590C.jpg' size='medium'/>
            <Box direction="column" justify="center" style={styles.textBox} responsive="true">
                <Paragraph>
                    Instytut PL590 mieści się
                    w apartamentach  dawnego
                    Domu Bankowego
                    Komunalnej  Kasy Oszczędnościowej, secesyjnej  kamienicy Wilhelma Rakmana.
                    Powstały w latach 1905-1906
                    obiekt w nienaruszonym stanie
                    przetrwał zawirowania wojenne
                    i polityczne przez  cały wiek XX.
                </Paragraph>
                <Paragraph>
                    Budynek położony przy zbiegu ulicy Poznańskiej 39 z Alejami  Jerozolimskimi 47
                    zaprojektowany został przez
                    uznanego, warszawskiego architekta Ludwika Panczakiewicza.
                </Paragraph>
            </Box>
        </Box>
        <Box style={styles.marginTop} direction="row" alignSelf="center" size={{height:'medium'}} full="horizontal">
            <SimpleMap />
        </Box>
    </Box>
);

const styles = {
    textBox: {
        marginLeft: 20,
        textAlign: 'justify'
    },
    marginTop: {
        marginTop: 25
    }
};

export default Location;