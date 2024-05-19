import React from 'react';

export const AnswerItem = ({id,lableText, onChange, checked}) => {
    return(
        <li className="variant-wrapper">
        <input 
        required 
        type="radio"
         name="question" 
         id={id}
         onChange={onChange}
         checked={checked} 
         />
        <label htmlFor={id}>{lableText}</label>
      </li>
    )
}