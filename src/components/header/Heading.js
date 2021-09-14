import React from 'react'
import classes from "./Heading.module.css"

function Heading() {
    return (
        <div>
             <header className={classes['header']}>
                <h1>MY BOOKS</h1>

            </header>
        </div>
    )
}

export default Heading
