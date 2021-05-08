import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import Product from '../../Components/Product';
import Graph from '../../Components/Graph'


export default function Homepage(props) {


    
 

    return (
        <div className="home">
       <Product/>
       <Graph/>
        </div>
    )
}
