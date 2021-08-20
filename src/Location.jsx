import styled from "styled-components"

// const

export const Location = (props) => {
    // name - Name of the location eg. Kingsford (Best suburb)
    // orientation - 0 = upright,  1 = left,  2 = down, 3 = right
    const { name, orientation } = props;

    return <div class="location">{name}LC</div>
}