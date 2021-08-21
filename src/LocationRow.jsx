import { Container, Row, Col } from "react-bootstrap";

import { Location } from "./Location";
import { Corner } from "./Corner";

export const LocationRow = (props) => {
    // PROPS
    // index - number from 0-3, also represents orientation (Starting at 0 at top, clockwise)

    const locRow = {
        backgroundColor: 'yellow',
        border: '2px solid red',
        margin: 0,
        padding: 0,
    }

    const locCol = {
        paddingLeft: 0,
        paddingRight: 0
    }

    // a single row contains 9 cards
    const ROW_SIZE = 9;


    let rows = [];
    let horizontal = true;
    if ([0, 2].includes(props.index)) {
        rows.push(<Col style={locCol} key={props.index + '0'}><Corner parentIndex={props.index} index={0}/></Col>);
        for (var i = 0; i < ROW_SIZE; i++) {
            let key = i + props.index;
            rows.push(
                <Col style={locCol} key={key}>
                    <Location key={key} horizontal={horizontal} index={i} parentIndex={props.index} />
                </Col>
            )
        }
        rows.push(<Col style={locCol} key={props.index + '1'}><Corner parentIndex={props.index} index={9}/></Col>);
    } else {
        // create vertical row
        horizontal = false;
        for (var i = 0; i < ROW_SIZE; i++) {
            let key = i + props.index;
            rows.push(
                <Row key={key}>
                    <Location key={key} horizontal={horizontal} index={i} parentIndex={props.index} />
                </Row>
            )
        }
    }


    // return rows
    return <Row style={{ marginLeft: 0, marginRight: 0 }}>{rows}</Row>
    // return rows
    // // return <div width={'50px'}> locationrow</div >
}
