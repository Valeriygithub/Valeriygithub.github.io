import React from 'react'
import classes from './TextareaForCardRecept.module.css'
const TextareaForCardRecept =({children, ...props})=> {
  return (
	<textarea placeholder={children}  {...props} cols="30" rows="4" className={classes.TextareaCard}></textarea>
  )
}
export default TextareaForCardRecept;

