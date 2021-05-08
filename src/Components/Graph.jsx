import React, {useState, useEffect} from 'react'
import {  Doughnut }  from 'react-chartjs-2';

import { useSelector } from 'react-redux'




export default function Graph() {

    let inputRed = useSelector((state) => state.red) ;
    let inputAqua = useSelector((state) => state.aqua) ;
    let inputYellow = useSelector((state) => state.yellow) ;
    let inputPurple = useSelector((state) => state.purple) ;
    let inputOrange = useSelector((state) => state.orange) ;
    let inputBlue = useSelector((state) => state.blue) ;

    const[redColor, setRedColor] = useState(0);
    const[aquaColor, setAquaColor] = useState(0);
    const[yellowColor, setYellowColor] = useState(0);
    const[purpleColor, setPurpleColor] = useState(0);
    const[orangeColor, setOrangeColor] = useState(0);
    const[blueColor, setBlueColor] = useState(0);

    useEffect(()=>{
          
        setRedColor(inputRed.red);
        setAquaColor(inputAqua.aqua);
        setYellowColor(inputYellow.yellow);
        setPurpleColor(inputPurple.purple);
        setOrangeColor(inputOrange.orange);
        setBlueColor(inputBlue.blue);
        },[inputRed, inputAqua,inputYellow,inputPurple,inputOrange,inputBlue]);
    
        console.log(redColor)
       
       
       
      console.log(inputRed.red)

    const chartData = {
        labels: ["Red", "Aqua", "Yellow", "Purple", "Orange", "Blue"],
                datasets: [
                  {
                    label: "# of Hits",
                    data: [redColor, aquaColor,  yellowColor, purpleColor, orangeColor, blueColor],
                    backgroundColor: [
                      "#F7604D",
                      "#4ED6B8",
                      
                      "#D7D768",
                      "#9D66CC",
                      "#DB9C3F",
                      "#3889FC"
                    ],
                    borderWidth: 0
                  }
                ]
    }


 
    
    

    

  


    return (
        <div className="graph_main_container">
            {/* <h3>Performance</h3> */}
            <div className="performChart">
            <Doughnut
                     
                     options={{
                         responsive:true,
                         legend: {
                          labels: {
                              fontColor: "white",
                              fontSize: 12    
                          }
                      },
                         
                     }}
                     data={chartData}
                     />
            </div>
        </div>
    )
}
