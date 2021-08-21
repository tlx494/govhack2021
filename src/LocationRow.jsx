import { Row, Col } from "react-bootstrap";

import { Location } from "./Location";

export const LocationRow = (props) => {
    // PROPS
    // index - number from 0-3, also represents orientation (Starting at 0 at top, clockwise)

    // a single row contains 9 cards
    const ROW_SIZE = 9;


    let rows = [];
    let horizontal = true;
    if ([0, 2].includes(props.index)) {
        for (var i = 0; i < ROW_SIZE; i++) {
            rows.push(
                <Col>
                    <Location key={i + horizontal} horizontal={horizontal} index={i} parentIndex={props.index}></Location>
                </Col>
            )
        }
    } else {
        // create vertical row
        horizontal = false;
        for (var i = 0; i < ROW_SIZE; i++) {
            rows.push(
                <Row>
                    <Location key={i + horizontal} horizontal={horizontal} index={i} parentIndex={props.index}></Location>
                </Row>
            )
        }
    }

    return rows
    // return <div width={'50px'}> locationrow</div >
}
