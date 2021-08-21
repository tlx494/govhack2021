import { WIDTH_MODIFIER } from "./Constants";

export const Location = (props) => {
    // name - Name of the location eg. Kingsford (Best suburb)
    // parentIndex - 0 = upright,  1 = left,  2 = down, 3 = right
    // colour - colour of location bar
    const { parentIndex, index, isCorner, horizontal, isLeft } = props;

    const name = null;
    const color = null;

    // dynamic CSS values
    const innerBorderWidth = 1;

    const bodyName = name || "No Name :("
    const headColor = color || "purple"
    const bodyColor = '#D2E5D2' // Slightly off white MMMMMYES

    const locationWidthModifier = 0.0917;
    const locationWidthVal = WIDTH_MODIFIER * locationWidthModifier;

    const locationWidth = locationWidthVal + 'vw';
    const locationHeadHeight = locationWidthVal * 0.3 + 'vw';
    const locationBodyHeight = locationWidthVal * 0.7 + 'vw';

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
            padding: WIDTH_MODIFIER / 38 + 'vw',
        }

        return (<div style={cornerStyle}>
            <div style={cornerTextStyle}>
                hello-
            </div>
        </div>)

    }

    // renders normal locations
    let insideLocation;
    if (parentIndex === 0) { // if top row
        insideLocation = <>
            <div style={{ ...bodyStyle }}>
                {bodyName}
            </div>
            <div style={{ ...headStyle }}></div>
        </>
    } else {
        insideLocation = <>
            <div style={headStyle}></div>
            <div style={bodyStyle}>
                {bodyName}
            </div>
        </>
    }

    return (<div style={locStyle} className="no-margin-or-padding">{insideLocation}</div>
    )
}
