import React, { useContext } from 'react'
import Rating from './Rating'
import {Button} from 'react-bootstrap'
import { CartContext } from '../Context'

const SingleItem = ({prod}) => {

  const {state,dispatch}=useContext(CartContext)
  
  console.log(state.product);

  return (
    <div className='singleProduct'>
        <img src={prod.image} alt='product-pic' />
        <div className='prod__title'>{prod.name}</div>
        
        <div>{
            prod.fastDelivery?(<div>Fast Delivery Avaliable</div>):(<div>4 days delivery</div>)
        }
        </div>
        <span>
        <Rating rating={prod.ratings}/>
        </span>
        <span>Rs {prod.price}</span>
        {state.cart.some(p=>p.id===prod.id)?(<Button className='btn' variant='danger' onClick={()=>dispatch({
          type:'REMOVE_FROM_CART',
          payload:prod
        })}>remove</Button>):(<Button className='btn' disabled={!prod.instock} variant='info' onClick={()=>dispatch({
          type: "ADD_TO_CART",
          payload:prod
        })}>{!prod.instock?"out of stock":"add to cart"}</Button>)}
        
    </div>
  )
}

export default SingleItem