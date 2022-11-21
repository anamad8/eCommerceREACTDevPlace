import React, {useState, useContext} from 'react';
import style from'./Heder.module.css';
import logo from '../../img/yl.png'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { DataContext} from '../../Contex/DataContex'
import Carrito from '../Carrito/Carrito'

function Header() {

  const { busqueda, setBusqueda } = useContext(DataContext )

  const handleChange=e=>{
    setBusqueda(e.target.value);
    
  }


  return (
    <div className={style.header}>
        <div className={style.logo}>
            <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className={style.link}>
            <Link to="/">Home</Link>
            <Link to="/Productos">Producto</Link>
            <Link to="/Faq">FAQ</Link>
        </div>
        <div className={style.buscar}>
          <input type="text" placeholder='Buscar...' value={busqueda} onChange={handleChange}/>
          <button><FaSearch/></button>
        </div>
        <Carrito/>
    </div>
  )
}

export default Header