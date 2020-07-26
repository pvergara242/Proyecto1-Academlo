import React from 'react';
import {GridLoader} from 'react-spinners';
import './Loading.css'


function Loading(){
        return (
            <div className="loading">
                <GridLoader color="#2C7EB4" />
                <h2>Cargando...</h2>
            </div>
        )
    }

export default Loading;