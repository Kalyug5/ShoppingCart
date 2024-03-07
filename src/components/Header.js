import React, { useContext } from 'react'
import '../App.css'
import {Badge, Container, Dropdown, FormControl, Navbar,Nav, Button} from 'react-bootstrap'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CartContext } from '../Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
    const {state,dispatch,filterDispatch}=useContext(CartContext)
  return (
    <Navbar bg='dark'  variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text>
                <FormControl placeholder="Search a product" className="m-auto" style={{width:400}} onChange={(e)=>filterDispatch({
                    type:'SEARCH',
                    payload:e.target.value
                })}/>
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='primary'>
                        <MdOutlineShoppingCart color='white' fontSize={25} />
                        <Badge variant='light'>{state.cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:350,left: 'auto', right: 0}} >
                        {
                            state.cart.length>0?(
                                <div>
                                {state.cart.map((prod)=>{
                                    return (
                                        <span className='cartItem' key={prod.id}>
                                            <img className='cartItemImg' src={prod.image} alt='image'
                                            />
                                            <div className='cartItemDetails'>
                                                <span>
                                                {prod.name} 
                                                </span>
                                                <span>
                                                     Rs {prod.price.split('.')[0]}
                                                </span>
                                            </div>
                                            <AiFillDelete fontSize="20px" style={{cursor:"pointer"}}
                                            onClick= {()=> dispatch({type:'REMOVE_FROM_CART',payload: prod})}/>

                                            
                                        </span>
                                    )
                                })}
                                <Link to='/cart'>
                                    <Button className='cart-btn' variant='success'>go to cart</Button>
                                </Link>
                                </div>
                            ):(<span style={{padding:10}}>Your cart is Empty</span>)
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container> 
    </Navbar>
    
  )
}

export default Header