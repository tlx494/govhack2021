import { Container, Row, Col } from "react-bootstrap";

import { Location } from "./Location";

export const LocationRow = (props) => {
    // PROPS
    // index - number from 0-3, also represents orientation (Starting at 0 at top, clockwise)

    const locRow = {
        backgroundColor: 'yellow',
        border: '2px solid orange'
    }

    // a single row contains 9 cards
    const ROW_SIZE = 9;


    let rows = [];
    let horizontal = true;
    if ([0, 2].includes(props.index)) {
        for (var i = 0; i < ROW_SIZE; i++) {
            let key = i + props.index;
            rows.push(
                <Col key={key} sm={1} style={{ border: '2px solid brown' }}>asdf
                    {/* <Location key={key} horizontal={horizontal} index={i} parentIndex={props.index}></Location> */}
                </Col>
            )
        }
    } else {
        // create vertical row
        horizontal = false;
        for (var i = 0; i < ROW_SIZE; i++) {
            let key = i + props.index;
            rows.push(
                <Row key={key}>
                    <Location key={key} horizontal={horizontal} index={i} parentIndex={props.index}></Location>
                </Row>
            )
        }
    }


    // return rows
    return <Container style={locRow}><Row sm={2} style={{ border: '2px solid green' }}>{rows}</Row></Container>
    // return rows
    // // return <div width={'50px'}> locationrow</div >
}
