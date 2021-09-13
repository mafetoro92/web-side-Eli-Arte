import React, { Component } from 'react';
import list from '../../database/list.json';

export const AppContext = React.createContext(); //I create the context 
//AppProvider is my component create with class 

export class AppProvider extends Component {

    //This is a CreateContext file here we want to create the logic the add our shopping cart,
    //removing products and getTotal
    state = {
        products: list, //They have our json data
        cart: [],
        total: 0
    
    }

    addCart = (_id,_select) =>{ //this function start adding the objects 
        const {products, cart} = this.state;
        const check = cart.every(item =>{ //every return a boolean value
            return item.id !== _id // if its no equal return true  and if are equal return false
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === _id //want to see if is the same id will be saving all the object in the data variable
            })//will be saving a array with the object 
            data[0]['colors'] = _select.value; //we validate the colors 
            this.setState({cart: [...cart,...data]}) 
        }else{
            alert("El producto ya fue agregado al carrito.")
        }
    };
    
    //this function try to keep counter with 1 and if its no try to do reduction
    reduction = _id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === _id){
                item.count === 1 ? item.count = 1 : item.count -=1; //if counter is 1 continue with one but if you have a different number that one reduce one
            }
        })
        this.setState({cart: cart}); //I am update cart rewrite 
        this.getTotal(); //call this function 
    };

    increase = _id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === _id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = _id =>{
        if(window.confirm("Estas seguro de eliminar este item?")){//window is alert to give ur the option to accept or cancel
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item.id === _id){
                    cart.splice(index, 1) //we take index position and we take 1 element to delete
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
    
    };

    removeProducts= ()=>{
        if(window.confirm("Estas seguro de eliminar todos los productos?")){ //window is alert to give ur the option to accept or cancel
        this.setState({cart:[]}) //we delete all products and we put cart like empty array
    }}

    
    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => { //take tow arguments prev is the info exist already and item is the actual info
            return prev + (item.price * item.count);//here we update total
        },0)
        this.setState({total: res}) //we overwrite total with res variable
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }


    render() {
        const {products, cart,total} = this.state; //I create a destructuring the state variable 
        const {addCart,reduction,increase,removeProduct,getTotal,removeProducts} = this;
        return (
            <AppContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal,removeProducts}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }


}