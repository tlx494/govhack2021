export const Location = (props) => {
    // name - Name of the location eg. Kingsford (Best suburb)
    // parentIndex - 0 = upright,  1 = left,  2 = down, 3 = right
    // colour - colour of location bar
    const { name, parentIndex, index, isCorner , color } = props;

    //Dynamic CSS values
    const innerBorderWidth = 1;
    const rotateDegree = parentIndex * 90
    const bodyName = name || "No Name :("
    const headColor = props.color || "purple"
    const bodyColor = '#DDDDDD' // Slightly off white

    const locStyle = {
        transform: `rotate(${rotateDegree}deg)`,
        width: '100%',
        height: 100,
        border: "1px solid black"
    }
    const headStyle = {
        width: '100%',
        height: 20 - innerBorderWidth * 2,
        backgroundColor: headColor,
        border: `${innerBorderWidth}px solid black`
    }
    const bodyStyle = {
        width: '100%',
        height: 80 - innerBorderWidth * 2,
        textAlign: "center",
        backgroundColor: bodyColor,
        border: `${innerBorderWidth}px solid black`
    }

    console.log(isCorner)
    if (isCorner === true) {
        const cornerStyle = {
            width: 100,
            height: 100,
            border: "1px solid black",
            backgroundColor: bodyColor,
        }
    
        let textDegrees = ((parentIndex === 0 && index === 0) || (parentIndex === 2 && index === 10)) ? 315 : 45
        const cornerTextStyle = {
            transform: `rotate(${textDegrees}deg)`,
            textAlign: "center",
            padding: "35px 0"
        }

        return (<div style={cornerStyle}>
            <div style={cornerTextStyle}>
                hello-
            </div>
        </div>)

    } else {

        return (<div style={{ width: '100%' }} className="no-margin-or-padding">
            <div style={headStyle}></div >
            <div style={bodyStyle}>
                {bodyName}
            </div >
        </div>
        )

    }
}
