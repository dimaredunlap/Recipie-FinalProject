import React, {useContext, useState} from 'react'
import { Context } from '../store/appContext'

export const Glist=()=> {
    const {store, actions} = useContext(Context)
    console.log(store)
  return (
    <>
    <div className="container">
        {store.red.map((item, index)=>{
            return(
                <div><input type="checkbox"/>{item.ingredients}</div>
                    
            )
        })}
      
      
    </div>
    </>
  )
}

