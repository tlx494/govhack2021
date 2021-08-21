import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { LocationRow } from './LocationRow';

import { TOTAL_ROW_LENGTH, TOTAL_OUTER_ROWS } from './Constants';

export const Board = () => {

    const outerContainerStyle = {
        backgroundColor: 'grey',
        width: '50vw',
    }

    // 3 rows. Top row and bottom row contain two corners each. 
    // The middle row contains the entire vertical columns of the left/right sides
    let outerRows = [];
    for (var i = 0; i < TOTAL_OUTER_ROWS; i++) {
        outerRows.push(
            <Row sm={11}>
                <LocationRow key={i} index={i}></LocationRow>
            </Row>
        );
    }

    return <Container fluid style={outerContainerStyle}>{outerRows}</Container>
}
