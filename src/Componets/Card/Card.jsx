import React,{ useContext, useState } from 'react';
import style from './Card.module.css';
import ModalComprar from '../ModalComprar/ModalComprar';
import { DataContext } from '../../Contex/DataContex';

function Card({id, genero, categoria, img, img2, titulo, precio}) {

  const [modal,setModal] = useState(false);

  const { addItemToCart } = useContext(DataContext)

  const produc = {id, genero, categoria, img, img2, titulo, precio}

  return (
    <div className={style.card}>
        <img className={style.img1} src={img2} alt="" />
        <img className={style.img2} src={img} alt="" />
        <h3>{titulo}</h3>
        <p>$ {precio}</p>
        
        <div className={style.btn}>
          <button value={categoria} onClick={() => {
                  addItemToCart(produc)
                }}>Comprar</button>
          <button value={categoria} onClick={() => {
                  setModal(true);
                }}>Ver más</button>
        </div>
      
      {
        modal ? <ModalComprar img1={img} img2={img2} precio={precio} titulo={titulo}
        setModal={setModal} modal={modal}/>
        :
        <></>
      }
      
        

    </div>
  )
}

export default Card;