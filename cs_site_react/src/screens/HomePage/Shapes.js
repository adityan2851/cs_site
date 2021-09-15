import React from 'react'

const Shapes = () => {

    const handleStyle1 = {
        width: "8px",
        height: "100px",
        backgroundColor: "#2879FE",
        marginRight: "5px"
    }

    const handleStyle2 = {
        width: "8px",
        height: "100px",
        backgroundColor: "#4F91FF",
        marginRight: "5px"
    }

    const handleStyle3 = {
        width: "8px",
        height: "100px",
        backgroundColor: "#77A9FE",
        marginRight: "15px"
    }

    return (
        <>
            <div style={handleStyle1}></div>
            <div style={handleStyle2}></div>
            <div style={handleStyle3}></div>
        </>
    )
}

export default Shapes
