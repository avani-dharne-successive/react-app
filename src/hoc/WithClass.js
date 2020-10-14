import React from 'react'

const WithClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
)

const withClassF = (WrappedComponent , classes) => {
    return props => (
        <div className={classes}>
            <WrappedComponent/>
        </div>
    )
}

export default WithClass