import React from "react";
export default function Button(props) {
    const btnStyles = {
            border: 'unset',
            padding: '5px 30px',
            fontSize: 20,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: props.color ?? 'white',
            background: props.background ?? '#3f3f3f',
            cursor: 'pointer'
        };
    return (
        <div>
            <button onClick={props.onClick} style={btnStyles}>
                {props.label}
            </button>
        </div>
    );
}