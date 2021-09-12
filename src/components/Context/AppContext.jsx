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

    addCart = (_id,_select) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.id !== _id // if its no equal return true  and if are equal return false
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === _id 
            })
            data[0]['colors'] = _select.value;
            this.setState({cart: [...cart,...data]})
        }else{
            alert("El producto ya fue agregado al carrito.")
        }
    };
    
    reduction = _id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === _id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart}); 
        this.getTotal();
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
        if(window.confirm("Estas seguro de eliminar este item?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item.id === _id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
    
    };

    removeProducts= ()=>{
        if(window.confirm("Estas seguro de eliminar todos los productos?")){
        this.setState({cart:[]})
    }}

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
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