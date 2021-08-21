import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { LocationRow } from './LocationRow';

<<<<<<< HEAD
import { TOTAL_ROW_LENGTH, TOTAL_OUTER_ROWS } from './Constants';
=======
import { TOTAL_ROW_LENGTH } from './Constants';
>>>>>>> 77ae99faf8e38b5f46cad0c9cdec2b25b9790a0d

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
