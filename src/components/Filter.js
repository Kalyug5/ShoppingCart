import React, { useContext} from 'react'
import { Button, FormCheck } from 'react-bootstrap'
import '../App.css'
import Rating from './Rating'
import { CartContext } from '../Context'

const Filter = () => {
    
    const {filterState,filterDispatch}=useContext(CartContext)
    console.log(filterState)
  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <FormCheck inline label='Asecnding' name='group1' type='radio' id={`inline-1`} onChange={()=>filterDispatch({
                type:'SORTING',
                payload:'lowtoup'
            })} checked={filterState.sort==='lowtoup'? true : false}/>
        </span>
        <span>
            <FormCheck inline label='Descending' name='group1' type='radio' id={`inline-1`} onChange={()=>filterDispatch({
                type:'SORTING',
                payload:'uptolow'
            })} checked={filterState.sort==='uptolow'? true : false}/>
        </span>
        
        <span>
            <FormCheck inline label='Fast delivery only' name='group1' type='checkbox' id={`inline-4`} onChange={()=>filterDispatch({
                type:'DELIVERY'
            })} />
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating: </label>
            <Rating rating={filterState.isRating} style={{cursor: "pointer"}} onClick={(i)=>filterDispatch({
                type:'RATING',
                payload:i+1
            })}/>
        </span>
        <Button variant='primary' onClick={()=>filterDispatch({
            type:'FILTER'
        })}>Clear Filters</Button>

    </div>
  )
}

export default Filter