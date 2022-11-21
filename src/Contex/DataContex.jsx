/* eslint-disable no-undef */
import React, {createContext, useState, useEffect} from "react";
import datosMuejer from '../Datos/DatosMujer.js';


export const DataContext = createContext({});

export const DataProveder = ({children}) => {

    // estado para buscar productos
    const [busqueda, setBusqueda]= useState("");

    // el estado para el dato de ropa
    const [dataMujer,setDataMujer] = useState(datosMuejer);


    // filtrar articulos
    const [articulos, setArticulos] = useState(datosMuejer);

    const todasCategorias = [
		'Todos',
		...new Set(datosMuejer.map(articulo => articulo.categoria)),
	]

    const [categorias, setCategorias] = useState(todasCategorias);

    // el estado para los articulos guardados
    const [artiduloGuardado, setArtiduloGuardado] = useState([])

    // creo el estado para el contador
    const [cantidad, setCantidad] = useState([])  

    // creo el estado para la info del comprador
    const [infoCompar, serInfoCompar] = useState([])

    // estado del carrito
    const [cartItems, setCartItems] = useState(()=> {
        try {
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        }catch{
            return [];
        }
    });

    useEffect(()=>{
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));

    },[cartItems])

//  funcion para agregar al carrito
    const addItemToCart = (product) =>{
        const inCart = cartItems.find((produtInCart) => produtInCart.id === product.id)

        if (inCart) {
            setCartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.id === product.id){
                        return {...inCart, amount: inCart.amount + 1};
                    }else return productInCart
                })
            )
        }else{
            setCartItems([...cartItems,{...product,amount: 1}]);
        }

        
    };

//  funcion para sacar al carrito
    const deleteItemToCart = (product) => {

        if (product.amount === 1) {
            setCartItems(
                cartItems.filter(productInCart => productInCart.id !== product.id)
            )
        }else{
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === product.id){
                        return {...product,amount: product.amount - 1}
                    }else return productInCart;
                })
            )
        }
        
    }
    
//-------- funcion filtar productos-------------------------------------------------------------
    const filterCategoria = (categoria) => {
        
		if (categoria === 'Todos'){
			setArticulos(datosMuejer)
			return
		}

		const filterData = datosMuejer.filter(articlulo => articlulo.categoria === categoria);
        setArticulos(filterData)
	}


//-------funcion para guardar los articulos----------------------------------------------------
    const guardarArticulos =(prenda)=> {
        setArtiduloGuardado(
            prenda
        );
    }


// ----Funcion para agregar cantidad---------------------------------------------------------------
    const cantidadRompa =(cantidad)=> {
        setCantidad(
            
            cantidad
        );
    }

// ----Agrega los datos de la tarjetas ---------------------------------------
const addToInfo =({user_name,user_email,num_tarjeta,fecha_tarjeta})=> {
    serInfoCompar([
        ...infoCompar,
        {
            user_name,
            user_email,
            num_tarjeta,
            fecha_tarjeta
        }]);
}



    return(
        <DataContext.Provider value={{dataMujer,setDataMujer,cantidad,cantidadRompa,artiduloGuardado,
                                    guardarArticulos, filterCategoria, categorias,articulos,addItemToCart, 
                                    deleteItemToCart, cartItems,busqueda, setBusqueda, addToInfo,infoCompar}}>
            {children}
        </DataContext.Provider>
    )
}