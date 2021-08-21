import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { LocationRow } from './LocationRow';

import './css/board.css';

export const Board = () => {

    const outerRowStyle = {
        backgroundColor: 'grey',
        border: '2px solid black',
    }

    const ROWS = 4

    let outerRows = [];


    // 3 rows. Top row and bottom row contain two corners each. The middle row contains the entire vertical column of the left/right sides
    for (var i = 0; i < ROWS; i++) {
        outerRows.push(<Row><LocationRow key={i} index={i}></LocationRow></Row>);
    }

    return <Container style={outerRowStyle}>{outerRows}</Container>
}
