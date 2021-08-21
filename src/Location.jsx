import { MONOPOLY_BG_COLOR, SIZE_MODIFIER, TOTAL_LOCATIONS_IN_A_ROW, VIEWPORT_UNIT } from "./Constants";

export const Location = (props) => {
    // name - Name of the location eg. Kingsford (Best suburb)
    // parentIndex - 0 = upright,  1 = left,  2 = down, 3 = right
    // colour - colour of location bar
    const { parentIndex, index, isCorner, horizontal, isLeft, year} = props;

    // calculate the ranking of this one around the board, with the "go" square at 0 in the bottom-right,
    //  and the one behind it at 39 (40 total squares), going clockwise around the board
    let ranking = 0;
    switch (parentIndex) {
        case 0:
            ranking = index;
            break;
        case 1:
            if (isLeft) {
                ranking = 11 + TOTAL_LOCATIONS_IN_A_ROW - index;
            } else {
                // ranking = 
            }
            break;
        case 2:
            ranking = 39 - index;
    }


    const name = null;
    const color = null;

    // dynamic CSS values
    const innerBorderWidth = 1;

    const bodyName = name || "No Name :("
    const headColor = color || "purple"
    const bodyColor = MONOPOLY_BG_COLOR // Slightly off white MMMMMYES

    const locationWidthModifier = 0.0918;
    const locationWidthVal = SIZE_MODIFIER * locationWidthModifier;

    const locationWidth = locationWidthVal + VIEWPORT_UNIT;
    const locationHeadHeight = locationWidthVal * 0.3 + VIEWPORT_UNIT;
    const locationBodyHeight = locationWidthVal * 0.7 + VIEWPORT_UNIT;

    // properies and styles for locations (non corners)
    let rotateDegree = 0
    if (parentIndex === 1) {
        if (isLeft) {
            rotateDegree = 90;
        } else {
            rotateDegree = 270;
        }
    } else if (parentIndex === 2) {
        rotateDegree = 360
    }

    const locStyle = {
        transform: `rotate(${rotateDegree}deg)`,
        position: 'relative',
        backgroundColor: bodyColor,
    }
    const headStyle = {
        width: locationWidth,
        height: locationHeadHeight,
        backgroundColor: headColor,
        border: `${innerBorderWidth}px solid black`,
    }
    const bodyStyle = {
        width: locationWidth,
        height: locationBodyHeight,
        textAlign: "center",
        border: `${innerBorderWidth}px solid black`,
    }

    // renders corner locations
    if (isCorner === true) {
        const cornerStyle = {
            width: locationWidth,
            height: locationWidth,
            border: "1px solid black",
            backgroundColor: bodyColor,
        }

        let textDegrees = ((parentIndex === 0 && index === 0) || (parentIndex === 2 && index === 10)) ? 315 : 45
        const cornerTextStyle = {
            transform: `rotate(${textDegrees}deg)`,
            textAlign: "center",
            padding: SIZE_MODIFIER / 38 + VIEWPORT_UNIT,
        }

        return (<div style={cornerStyle}>
            <div style={cornerTextStyle}>
                corner text here
            </div>
        </div>)

    }

    const bodyContent = <>
        {bodyName} { }
    </>

    // renders normal locations
    let insideLocation;
    if (parentIndex === 0) { // if top row
        insideLocation = <>
            <div style={{ ...bodyStyle }}>{bodyContent}</div>
            <div style={{ ...headStyle }}></div>
        </>
    } else {
        insideLocation = <>
            <div style={headStyle}></div>
            <div style={bodyStyle}>{bodyContent}</div>
        </>
    }

    return (<div style={locStyle} className="no-margin-or-padding">{insideLocation}</div>
    )
}
