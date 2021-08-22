import { Container, Row, Col } from "react-bootstrap";

import { Location } from "./Location";
import { TOTAL_LOCATIONS_IN_A_ROW, TOTAL_ROW_LENGTH } from "./Constants";
// import { getTimes } from "./calculations";

export const LocationRow = (props) => {
    const { parentIndex } = props.index;
    // index - number from 0-3, also represents orientation (Starting at 0 at top, clockwise)

    let rows = [];
    let horizontal = true;
    // creates a full row of locations including corners (used for top and bottom rows)
    if ([0, 2].includes(props.index)) {

        for (var i = 0; i < TOTAL_ROW_LENGTH; i++) {
            let isCorner = ([0, TOTAL_ROW_LENGTH - 1].includes(i));

            let key = i + props.index;
            rows.push(
                <Col sm={1} className="no-margin-or-padding" key={key} >
                    <Location key={key} horizontal={horizontal} index={i} parentIndex={props.index} isCorner={isCorner} selectedName={props.selectedName} />
                </Col>
            )
        }
    } else {
        // create a row in the middle (which only have a location at the start and end)
        horizontal = false;

        for (var i = 0; i < TOTAL_LOCATIONS_IN_A_ROW; i++) {
            let key = i + props.index;
            rows.push(
                <Row>
                    <Col sm={1} className="no-margin-or-padding" key={key} >
                        <Location key={key + '-left'} horizontal={horizontal} index={i} isLeft={true} parentIndex={props.index} selectedName={props.selectedName} />
                    </Col>
                    <Col sm={{ span: 1, offset: 9 }} style={{ padding: 0 }} key={key} >
                        <Location key={key + '-right'} horizontal={horizontal} index={i} isLeft={false} parentIndex={props.index} selectedName={props.selectedName} />
                    </Col>
                </Row>
            )
        }
    }

    if (horizontal) {
        rows = <Row>{rows}</Row>
    }
    return rows
}
