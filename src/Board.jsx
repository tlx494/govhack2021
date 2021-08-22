import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { LocationRow } from './LocationRow';

import { TOTAL_OUTER_ROWS, SIZE_MODIFIER, VIEWPORT_UNIT, MONOPOLY_BG_COLOR } from './Constants';

export const Board = () => {

    const outerContainerStyle = {
        backgroundColor: MONOPOLY_BG_COLOR,
        width: SIZE_MODIFIER + VIEWPORT_UNIT,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        fontSize: SIZE_MODIFIER / 60 + VIEWPORT_UNIT,
        // overflow: 'hidden',
    }

    const imgStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
    }

    const innerContainerStyle = {
        width: SIZE_MODIFIER * 1.1 + VIEWPORT_UNIT,
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


    // dropodown
    // use keys for the JSON file as LGA's

    return <Container fluid style={outerContainerStyle}>
        <img src="https://i.imgur.com/KeDqLyk.png" style={imgStyle} />
        <div style={innerContainerStyle}>
            {outerRows}
        </div>
    </Container>
    // return <div>{outerRows}</div>
}
