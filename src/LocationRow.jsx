import { Container, Row, Col } from "react-bootstrap";

import { Location } from "./Location";
import { TOTAL_LOCATIONS_IN_A_ROW, TOTAL_ROW_LENGTH } from "./Constants";

export const LocationRow = (props) => {
    const { parentIndex } = props.index;
    // index - number from 0-3, also represents orientation (Starting at 0 at top, clockwise)

    let rows = [];
    let horizontal = true;
    if ([0, 2].includes(props.index)) {
        for (var i = 0; i < TOTAL_ROW_LENGTH; i++) {
            let key = i + props.index;
            let isCorner = false;
            if ([0, TOTAL_ROW_LENGTH - 1].includes(i)) {
                isCorner = true;
            }
            rows.push(
                <Col sm={1} className="no-margin-or-padding" key={key} >
                    <Location key={key} horizontal={horizontal} index={i} parentIndex={props.index} isCorner={isCorner} />
                </Col>
            )
        }
    } else {
        // create vertical row
        horizontal = false;
        for (var i = 0; i < TOTAL_LOCATIONS_IN_A_ROW; i++) {
            let key = i + props.index;
            rows.push(
                <Row>
                    <Col sm={1} className="no-margin-or-padding" key={key} >
                        <Location key={key + '-left'} horizontal={horizontal} index={i} isLeft={true} parentIndex={props.index} />
                    </Col>
                    <Col sm={{ span: 1, offset: 9 }} style={{ padding: 0 }} key={key} >
                        <Location key={key + '-right'} horizontal={horizontal} index={i} isLeft={false} parentIndex={props.index} />
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
