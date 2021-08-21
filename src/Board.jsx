import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { LocationRow } from './LocationRow';

import './css/board.css';
import { Corner } from './Corner';
import { TOTAL_ROW_LENGTH } from './Constants';

export const Board = () => {

    const outerContainerStyle = {
        backgroundColor: 'grey',
    }

    const ROWS = 3

    let outerRows = [];


    // 3 rows. Top row and bottom row contain two corners each. The middle row contains the entire vertical column of the left/right sides
    for (var i = 0; i < ROWS; i++) {

        outerRows.push(<Row sm={TOTAL_ROW_LENGTH}>
            <LocationRow key={i} index={i}></LocationRow>
        </Row>);
    }

    return <Container fluid style={outerContainerStyle}>{outerRows}</Container>
}
