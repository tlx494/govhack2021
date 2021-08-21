import { Container, Row, Col } from "react-bootstrap";

import { Location } from "./Location";
import { TOTAL_LOCATIONS_IN_A_ROW, TOTAL_ROW_LENGTH } from "./Constants";
// import { getTimes } from "./calculations";

export const LocationRow = (props) => {
    const { parentIndex } = props.index;
    // index - number from 0-3, also represents orientation (Starting at 0 at top, clockwise)

    // bottom right location is starting, going anticlockwise around the board
    // also - maybe you also want to pass in suburb names (along with years)
    // displaying time (until you get buy a house) on the grid
    // 1. call function getTimes()
    // 2. split array into 4 equal 9 subarrays
    // 3  clockwise starting from bottom right, so 
    //  [0-8].reverse() mapped to parentIndex 2
    //  [9-17] to left side
    //  [18-26] mapped to parentIndex 1 .
    //  [27-35] to right side
    // let array = getTimes(); // easier for now
    let arrayOfYears = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, null, 24, 25, 26, 27, 28, 29, 30, null, 32, 33, 34, 35, 36]
    let bottomRowYears = arrayOfYears.slice(0, 9).reverse();
    console.log(bottomRowYears);
    let leftColYears = arrayOfYears.slice(9, 18)
    console.log(leftColYears);
    let topRowYears = arrayOfYears.slice(18, 27)

    console.log(topRowYears);

    let rows = [];
    let horizontal = true;
    // creates a full row of locations including corners (used for top and bottom rows)
    if ([0, 2].includes(props.index)) {
        let years = (props.index === 0) ? topRowYears : bottomRowYears;
        console.log(years);


        for (var i = 0; i < TOTAL_ROW_LENGTH; i++) {
            let isCorner = ([0, TOTAL_ROW_LENGTH - 1].includes(i)) ? true : false;
            let year = null;
            if (i != 0 && i != 10) {
                year = years[i - 1]
            }
            console.log(year)

            let key = i + props.index;
            rows.push(
                <Col sm={1} className="no-margin-or-padding" key={key} >
                    <Location key={key} horizontal={horizontal} index={i} parentIndex={props.index} isCorner={isCorner} year={year} />
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
