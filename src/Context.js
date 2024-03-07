import React, { useReducer} from 'react'
import { createContext } from 'react'
import { faker } from '@faker-js/faker';
import cartReducer from './Reducer';
import { FilterReducer } from './Reducer';

export const CartContext=createContext()
const Context = ({children}) => {

  faker.seed(98)
    const product=[...Array(20)].map(()=>({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.avatar(),
        instock:faker.helpers.arrayElement([0,3,5,6]),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.helpers.arrayElement([1,2,3,4,5])
        

    }))

    const [state, dispatch] = useReducer(cartReducer,{
        product:product,
        cart:[]
    })

    const [filterState,filterDispatch]=useReducer(FilterReducer,{
      isfastDelivery:false,
      searchQuery:"",
      IsStock:false,
      isRating:0,sort:''
    })
    
  return (
    <CartContext.Provider value={{state,dispatch, filterState,filterDispatch}}>
        {children}
    </CartContext.Provider>
  )
}


export default Context