import React from 'react'

export const Button = ({text, color, onClick}) => {
  return <button onClick={onClick} style={{ backgroundColor:color }} className="btn">{text}</button>
}
