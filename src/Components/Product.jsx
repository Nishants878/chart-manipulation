import React,{useState} from 'react';
import {  useDispatch } from 'react-redux';
import { addRedCount, addAquaCount, addYellowCount, addPurpleCount, addOrangeCount, addBlueCount  } from '../redux/reducer'

export default function Product() {
 
    const dispatch = useDispatch();

     const[redVal, setRedVal] =useState(0);
     const[aquaVal, setAquaVal] =useState(0);
     const[yellowVal, setRYellowVal] =useState(0);
     const[purpleVal, setPurpleVal] =useState(0);
     const[orangeVal, setOrangeVal] =useState(0);
     const[blueVal, setBlueVal] =useState(0);
    
     const handleRedIncrement = () =>{
        dispatch(
            addRedCount({
              red:redVal + 1
            })
        )

       
         setRedVal(redVal+1);
       console.log(redVal)
     }
     const handleRedDecrement = () =>{
         if(redVal > 0){
             setRedVal(redVal - 1)
             dispatch(
                addRedCount({
                  red:redVal - 1
                })
            )
         }
       
    }
    const handleAquaIncrement = () =>{
        setAquaVal(aquaVal + 1);
        dispatch(
            addAquaCount({
                aqua:aquaVal + 1
            })
        )
    }
    const handleAquaDecrement = () =>{
        if(aquaVal>0){
            setAquaVal(aquaVal - 1)
            dispatch(
                addAquaCount({
                    aqua:aquaVal - 1
                })
            )
        }
        
   }
   const handleYellowIncrement = () =>{
    setRYellowVal(yellowVal +1)
    dispatch(
        addYellowCount({
            yellow:yellowVal + 1
        })
    )
}
const handleYellowDecrement = () =>{
    if(yellowVal>0){
        setRYellowVal(yellowVal - 1)
        dispatch(
            addYellowCount({
                yellow:yellowVal - 1
            })
        )
    }
 
}
const handlePurpleIncrement = () =>{
    setPurpleVal(purpleVal + 1)
    dispatch(
        addPurpleCount({
            purple:purpleVal + 1
        })
    )
}
const handlePurpleDecrement = () =>{
    if(purpleVal>0){
        setPurpleVal(purpleVal -1)
        dispatch(
            addPurpleCount({
                purple:purpleVal - 1
            })
        )
    } 
   
}
const handleOrangeIncrement = () =>{

    
    setOrangeVal(orangeVal + 1);
    dispatch(
        addOrangeCount({
            orange:orangeVal + 1
        })
    )
}
const handleOrangeDecrement = () =>{
    if(orangeVal>0){
        setOrangeVal(orangeVal -1)
        dispatch(
            addOrangeCount({
                orange:orangeVal - 1
            })
        )
    }
    
}
const handleBlueIncrement = () =>{
    setBlueVal(blueVal +1)
    dispatch(
        addBlueCount({
            blue:blueVal + 1
        })
    )
  
}
const handleBlueDecrement = () =>{
    if(blueVal>0){
        setBlueVal(blueVal - 1)
        dispatch(
            addBlueCount({
                blue:blueVal - 1
            })
        )
    }
    
}




    return (
        <div className="product_main_container">
            <div className="product_content">
                <h2>Increment OR Decrement</h2>
                <div className="complete_product_flex">
                   <div className="product">
                     <p>Red:-</p>   <div className="inc_dec_wrap">

                           <div onClick={handleRedIncrement} className="increment">+</div>
                           <p>{redVal}</p>
                           <div onClick={handleRedDecrement} className="decrement">-</div>
                       </div>
                       </div> 
                       <div className="product">
                       <p>Aqua:-</p>   <div className="inc_dec_wrap">

                           <div onClick={handleAquaIncrement} className="increment">+</div>
                           <p>{aquaVal}</p>
                           <div onClick={handleAquaDecrement} className="decrement">-</div>
                       </div>
                       </div> 
                       <div className="product">
                       <p>Yellow:-</p>   <div className="inc_dec_wrap">

                           <div onClick={handleYellowIncrement} className="increment">+</div>
                           <p>{yellowVal}</p>
                           <div onClick={handleYellowDecrement} className="decrement">-</div>
                       </div>
                       </div>  
                       <div className="product">
                       <p>Purple:-</p>   <div className="inc_dec_wrap">

                           <div onClick={handlePurpleIncrement} className="increment">+</div>
                           <p>{purpleVal}</p>
                           <div onClick={handlePurpleDecrement} className="decrement">-</div>
                       </div>
                       </div> 
                       <div className="product">
                       <p>Orange:-</p>   <div className="inc_dec_wrap">

                           <div onClick={handleOrangeIncrement} className="increment">+</div>
                           <p>{orangeVal}</p>
                           <div onClick={handleOrangeDecrement} className="decrement">-</div>
                       </div>
                       </div> 
                       <div className="product">
                       <p>Blue:-</p>   <div className="inc_dec_wrap">

                           <div onClick={handleBlueIncrement} className="increment">+</div>
                           <p>{blueVal}</p>
                           <div onClick={handleBlueDecrement} className="decrement">-</div>
                       </div>
                       </div> 
                       
                </div>
            </div>
        </div>
    )
}
