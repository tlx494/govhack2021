import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { LocationRow } from './LocationRow';

import './css/board.css';

export const Board = () => {

    const ROWS = 4

    let outerRows = [];


    // 3 rows. Top row and bottom row contain two corners each. The middle row contains the entire vertical column of the left/right sides
    for (var i = 0; i < ROWS; i++) {
        outerRows.push(<Row className="outer-row" sm={3}><LocationRow className="location-row" key={i} index={i}></LocationRow></Row>);
    }

    const board = (
        <Container>{outerRows}</Container>
    )

    return board
}
