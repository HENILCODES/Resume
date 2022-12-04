import React, { useContext } from 'react'
import bookContext from './BookContext'

export default function BookListDisplay() {
    let ctx = useContext(bookContext);
    return (
        <>
            {ctx.DatabookContex.map((Element, s) => {
                return <h3 key={s}>{Element.title} | {Element.desc} | {ctx.name}</h3>
            })}
        </>
    )
}