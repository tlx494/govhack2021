import { Row, Col } from "react-bootstrap";

import { Location } from "./Location";

export const LocationRow = (props) => {
    // PROPS
    // index - number from 0-3, also represents orientation (Starting at 0 at top, clockwise)

    // a single row contains 9 cards
    const ROW_SIZE = 9;


    let rows = [];
    if ([0, 2].includes(props.index)) {
        for (var i = 0; i < ROW_SIZE; i++) {
            rows.push(
                <Col>
                    <Location key={i} index={i} parentIndex={props.index}></Location>
                </Col>
            )
        }
    } else {
        // create vertical row
        for (var i = 0; i < ROW_SIZE; i++) {
            rows.push(
                <Row>
                    <Location key={i} index={i} parentIndex={props.index}></Location>
                </Row>
            )
        }
    }

    return rows
}
