import React from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';
import { useAuth } from '../Login/useAuth';


export default function Cart() {
    const auth=useAuth();
    let price = 0;
    let i = 0;
    const foods = [];
    let Key;
    for (; Key = window.localStorage.key(i); i++) {
        foods[Key] = JSON.parse(window.localStorage.getItem(Key));
        price = price + parseInt(foods[Key].price);
    }
    console.log(foods)
    let count = localStorage.length;

    return (<div >
        <div className="row text-center" >
            <div className="col-8" id="cartPage">
                <img src="/Images/map.png" alt=""></img>
            </div>
            <div className="col-4" id="cartPage" id="foody">
                <div className="cartSection">
                    <img src="Images/Image/Group 1151.png"></img>
                </div>
                <div className="foodSection">
                    <h3>Item Orderd:{count}</h3>
                    {
                        foods.map((food)=>{
                           return <div>
                               <img src={food.url} alt="" id="image"></img>
                               <h5>item:{food.name}</h5>
                               <h5>Price:{food.price}</h5>
                           </div>

                        })
                    }
                    <h5>Total Price:{price}</h5>
                </div>
                <h5>User : {auth.kawsar}</h5>
                <Button id="order" onClick={()=>{
                    if(localStorage.length>0){
                        localStorage.clear();
                        window.location.href="/Thankyou"
                    }
                    else{
                        window.alert("You Haven't Added Any Product");
                        window.location.href="/"
                    }
                }}>Complete Order</Button>
            </div>
           
        </div>
    </div>
    )
}
