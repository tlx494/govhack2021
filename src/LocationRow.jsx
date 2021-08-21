import { Container, Row, Col } from "react-bootstrap";

import { Location } from "./Location";
import { Corner } from "./Corner";

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
        rows.push(<Col key={props.index + '0'} style={{ border: '2px solid brown' }}><Corner /></Col>);
        for (var i = 0; i < ROW_SIZE; i++) {
            let key = i + props.index;
            rows.push(
                <Col key={key} style={{ border: '2px solid brown' }}>
                    <Location key={key} horizontal={horizontal} index={i} parentIndex={props.index}></Location>
                </Col>
            )
        }
        rows.push(<Col key={props.index + '1'} style={{ border: '2px solid brown' }}><Corner /></Col>);
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
    return <Container style={locRow}><Row style={{ border: '2px solid green' }}>{rows}</Row></Container>
    // return rows
    // // return <div width={'50px'}> locationrow</div >
}
