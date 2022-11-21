import React,{ useContext } from 'react';
import style from './Home.module.css';
import { Link } from 'react-router-dom';
import imgMujer from '../../img/mujer.jpg';
import imgHombre from '../../img/hombre.jpg';

import imgCrusel1 from '../../img/carusel1.jpg';
import imgCrusel4 from '../../img/carusel4.jpg';
import imgCrusel5 from '../../img/carusel5.jpg';


import Footer from '../../Componets/Footer/Footer';
import { DataContext } from '../../Contex/DataContex';
import Card from '../../Componets/Card/Card';


function Home() {

  const {  articulos, busqueda } = useContext(DataContext )
  
  const filtro5Articulos = articulos.filter(bajo => bajo.precio <= 2500)

  const resultado = !busqueda ?  filtro5Articulos : articulos.filter(dato => (dato.categoria.toLowerCase().includes(busqueda.toLowerCase()) ))
  
    
  return (
    <>
      <div className={style.contenidoCrusel}>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
              <div class="carousel-item active ">
                <img src={imgCrusel1} class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src={imgCrusel4} class="d-block w-100" />
              </div>
              <div class="carousel-item">
                <img src={imgCrusel5} class="d-block w-100" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
      </div>

      <div className={style.cardProductos}>

        {
            resultado.map(dato => (
                <Card  key={dato.id} id={dato.id} genero={dato.genero} img={dato.img} categoria={dato.categoria} img2={dato.img2}
                        titulo={dato.titulo} precio={dato.precio}/>
            ))    
        }
        
      </div>

      <div className={style.home}>

        <div className={style.ropa}>
          <h2>Ropa para ellas</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusantium sed, 
            dolor voluptas commodi, officia architecto perferendis suscipit iste quo saepe deleniti natus 
            laboriosam fugiat nostrum hic molestias doloribus dolorum!
          </p>
        </div>
          
        <Link to="/Productos" ><img src={imgMujer} alt="" /></Link>
        <Link to="/Productos"><img src={imgHombre} alt="" /></Link>
        
        <div className={style.ropa}>
          <h2>Ropa para ellos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusantium sed,
              dolor voluptas commodi, officia architecto perferendis suscipit iste quo saepe deleniti natus 
              laboriosam fugiat nostrum hic molestias doloribus dolorum!
          </p>
        </div>
      </div>
    
    <Footer/> 
    </>
  )
}

export default Home