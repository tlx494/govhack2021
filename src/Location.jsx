import { getQueriesForElement } from "@testing-library/react";
import styled from "styled-components"

export const Location = (props) => {
    // name - Name of the location eg. Kingsford (Best suburb)
    // orientation - 0 = upright,  1 = left,  2 = down, 3 = right
    // colour - colour of location bar
    const { name, orientation } = props;
    switch (orientation) {
        case 0:
            break;
        default:
            break;
    }
    const locStyle = {
        color: 'red',
        width: '50px',
        height: '50px',
        border: '2px solid pink',
        backgroundColor: props.horizontal ? 'blue' : 'green',
    }
    return <div style={locStyle}>asdf
        {/* <div className="location-group"></div >
        <div className="location-base">
            ~Loc Name~
        </div > */}
    </div>
}
