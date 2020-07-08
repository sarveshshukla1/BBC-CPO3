import React from 'react'
import  './card-list-style.css'
import {Card} from  '../Card/card-component'
export const CardList=(props)=>{
return (
   <div className="card-list">
    {
        
    props.Monsters.map(monster=>
        (<Card key={monster.id} monster={monster}/>))
    }</div>);

}