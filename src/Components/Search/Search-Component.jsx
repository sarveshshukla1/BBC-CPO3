import React from 'react'
import  './Searchbox.style.css'

export const  SearchBox=({placeholder,handleChange})=>(
    <input type="Search" 
    placeholder={placeholder} 
    onChange={handleChange}
     />
)