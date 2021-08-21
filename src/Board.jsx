import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { LocationRow } from './LocationRow';

import { TOTAL_OUTER_ROWS, WIDTH_MODIFIER } from './Constants';

export const Board = () => {



    const outerContainerStyle = {
        backgroundColor: 'grey',
        width: WIDTH_MODIFIER + 'vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        // overflow: 'hidden',
    }
    const innerContainerStyle = {
        width: WIDTH_MODIFIER * 1.08988 + 'vw',
    }

    // 3 rows. Top row and bottom row contain two corners each. 
    // The middle row contains the entire vertical columns of the left/right sides
    let outerRows = [];
    for (var i = 0; i < TOTAL_OUTER_ROWS; i++) {
        outerRows.push(
            <Row>
                <LocationRow key={i} index={i}></LocationRow>
            </Row>
        );
    }

    return <Container fluid style={outerContainerStyle}>
        <div style={innerContainerStyle}>
            {outerRows}
        </div>
    </Container>
    // return <div>{outerRows}</div>
}
