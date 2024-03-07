import React, { useContext } from 'react'
import { CartContext } from '../Context'
import Filter from './Filter'
import SingleItem from './SingleItem'

const Home = () => {

    const {state,filterState,filterDispatch}=useContext(CartContext)
    const filterItems=()=>{
        let items=state.product
        if(filterState.sort){
            items=items.sort((a,b)=> filterState.sort==="lowtoup"?a.price-b.price:b.price-a.price)
        }

        if(!filterState.isStock){
            items=items.filter((item)=>item.instock)
        }

        if(filterState.isfastDelivery){
            items=items.filter((item)=>item.fastDelivery)
        }

        if(filterState.isRating){
            items=items.filter((item)=>filterState.isRating>=item.ratings)

        }
        if(filterState.searchQuery){
            items=items.filter((item)=>item.name.toLowerCase().includes(filterState.searchQuery))
        }


        return items
    }
    
  return (
    <div className='home'>
        <Filter/>
        <div className='products'>
            {
                filterItems().map((prod)=>{
                    return <SingleItem prod={prod}  key={prod.id} />
                })
            }
        </div>
    </div>
  )
}

export default Home