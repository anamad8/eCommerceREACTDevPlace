import React from 'react';
import style from './BtnFiltro.module.css';

function BtnFiltro({ categorias, filterCategoria }) {

  return (
    <div className={style.filtro}>
        {
            categorias.map(categoria => (
                    <button
                        onClick={() => filterCategoria(categoria)}
                        key={categoria}
                    >
                        {categoria}
                    </button>
            ))
        }
    </div>
  )
}

export default BtnFiltro