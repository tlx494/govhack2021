export const Corner = (props) => {
    const { parentIndex , index } = props; 
    console.log(parentIndex, index)

    const cornerStyle = {
        width: 100,
        height: 100,
        border: "1px solid black",
        backgroundColor: "#DDDDDD",
    }

    let textDegrees = ((parentIndex === 0 && index === 0) || (parentIndex === 2 && index === 9)) ? 315 : 45
    console.log(textDegrees)
    

    // map 0, 0 to 315, and 0, 9 to 45
    // map 2, 0 to 45 and 2, 9 to 315
    const cornerText = {
        transform: `rotate(${textDegrees}deg)`,
        textAlign: "center",
        padding: "35px 0"
    }

    return <div style={cornerStyle}>
            <div style={cornerText}>
                text here
                </div>
        </div>
}