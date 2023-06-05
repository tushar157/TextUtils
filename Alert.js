import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? 'black' : 'white',
        border : '2px solid',
        borderColor :  props.mode === 'dark' ? 'white' : 'black'
    }
    return (
        <div style={{height : '70px'}}>
           { props.alert &&
            <div style={myStyle} className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert