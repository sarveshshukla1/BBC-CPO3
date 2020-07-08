import React from 'react'

import './Card.style.css';
export const Card=(props)=>(
    <div className="card-container">
        
      <img src={"https://robohash.org/1?set=set2"}/>
<h1 >{props.monster.name}</h1>
<p>{props.monster.email}</p>
    </div>
    
)