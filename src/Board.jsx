import React, { useState } from 'react';
import { Container, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { LocationRow } from './LocationRow';
import { getTimes, getTimesAndFormat } from './calculations';
import { inputData } from './inputData'

import { TOTAL_OUTER_ROWS, SIZE_MODIFIER, VIEWPORT_UNIT, MONOPOLY_BG_COLOR } from './Constants';

export const Board = () => {
    const [selectedName, setSelected] = useState("Woollahra")

    const outerContainerStyle = {
        backgroundColor: MONOPOLY_BG_COLOR,
        width: SIZE_MODIFIER + VIEWPORT_UNIT,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        fontSize: SIZE_MODIFIER / 90 + VIEWPORT_UNIT,
        fontWeight: "bold",
        fontFamily: "Arial",
        // overflow: 'hidden',
    }

    const imgStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        objectFit: 'contain',
        width: '100%',
        height: SIZE_MODIFIER * 2.5,
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
                <LocationRow key={i} index={i} selectedName={selectedName}></LocationRow>
            </Row>
        );
    }

    // testing only
    const printSelected = (suburb) => {
        console.log(suburb)
    }

    // fetching list of suburbs from inputData and using them to render a dropdown selection
    // TODO: where this href goes
    const suburbItems = Object.keys(inputData).map((suburb) => <Dropdown.Item eventKey={suburb}>{suburb}</Dropdown.Item>)
    const suburbsDropdownStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    }
    const suburbsDropdown = <> 
        <DropdownButton id="dropdown-basic-button" title="Where do you live? ಠ_ಠ" style={suburbsDropdownStyle} onSelect={setSelected}>
            {suburbItems}
        </DropdownButton>
    </>
    
    return <div>
        {suburbsDropdown}
        <Container fluid style={outerContainerStyle}>
            <img src="https://i.imgur.com/KeDqLyk.png" style={imgStyle} />
            <div style={innerContainerStyle}>
                {outerRows}
            </div>
        </Container>
    </div>
    // return <div>{outerRows}</div>
}
