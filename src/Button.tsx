import React from 'react'
import './Button.css'

export default function ({ title }: {title: string}) {
    return (
        <button className="UI-Button">{title}</button>
    )
}