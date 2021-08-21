export const Location = (props) => {
    // name - Name of the location eg. Kingsford (Best suburb)
    // parentIndex - 0 = upright,  1 = left,  2 = down, 3 = right
    // colour - colour of location bar
    const { name, parentIndex, color } = props;

    //Dynamic CSS values
    const innerBorderWidth = 1;
    const rotateDegree = parentIndex * 90
    const bodyName = name || "No Name :("
    const headColor = props.color || "purple"
    const bodyColor = '#DDDDDD' // Slightly off white

    const locStyle = {
        transform: `rotate(${rotateDegree}deg)`,
        width: 100,
        height: 100,
        border: "1px solid black"
    }
    const headStyle = {
        width: 100,
        height: 20 - innerBorderWidth * 2,
        backgroundColor: headColor,
        border: `${innerBorderWidth}px solid black`
    }
    const bodyStyle = {
        width: 100,
        height: 80 - innerBorderWidth * 2,
        textAlign: "center",
        backgroundColor: bodyColor,
        border: `${innerBorderWidth}px solid black`
    }
    const locStyle2 = {
        color: 'red',
        width: '50px',
        height: '50px',
        border: '2px solid pink',
        backgroundColor: props.horizontal ? 'blue' : 'green',
    }
    // return <div style={locStyle}>asdf
    //     {/* <div className="location-group"></div >
    //     <div className="location-base">
    //         ~Loc Name~
    //     </div > */}
    return <div>
        <div style={headStyle}></div >
        <div style={bodyStyle}>
            {bodyName}
        </div >
    </div>
}
