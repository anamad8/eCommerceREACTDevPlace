import React from 'react';
import Card from '../Card/Card';
import style from './Articulos.module.css';

function Articulos({ articulos, busqueda }) {

  const resultado = !busqueda ?  articulos : articulos.filter(dato => (dato.categoria.toLowerCase().includes(busqueda.toLowerCase()) ))

  return (
    <div className={style.container}>
        {
            resultado.map(dato => (
                <Card  key={dato.id} id={dato.id} genero={dato.genero} img={dato.img} categoria={dato.categoria} img2={dato.img2}
                        titulo={dato.titulo} precio={dato.precio}/>
            ))    
        }
    </div>
  )
}

export default Articulos