import React, { useContext } from 'react';
import style from './Productos.module.css';
import BtnFiltro from '../../Componets/BtnFiltros/BtnFiltro';
import Articulos from '../../Componets/Articulos/Articulos';

import { DataContext } from '../../Contex/DataContex';


function Productos() {

    const { filterCategoria, categorias, articulos, busqueda} = useContext(DataContext )
    
    
    return (
        <div className={style.mujer}>
            
            <BtnFiltro categorias={categorias} filterCategoria={filterCategoria}/>  

            <Articulos articulos={articulos} busqueda={busqueda}/>

        </div>
    )
}

export default Productos