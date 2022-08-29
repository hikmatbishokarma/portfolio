import React from "react"

type eventObj = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type inputProps = {
    value: string,
    handleChange: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Events = (props: eventObj) => {

    const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event)
    }
    return (<div>
        <button onClick={props.handleClick} >click</button>
        <button onClick={handleChange} >change</button>
    </div>)
}