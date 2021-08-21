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
    return <div className="location">
        <div className="location-group"></div >
        <div className="location-base">
            ~Loc Name~
        </div >
    </div>
}