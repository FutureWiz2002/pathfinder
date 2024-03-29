"use client";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState, useEffect } from 'react';


const chartOptions = {
  scales: {
    y: {
      max: 100,
      beginAtZero: true,
    },
  },
};

export default function Home() {

  const length = 10
  const [newarray, setNewarray] = useState([0,0,0,0,0,0,0,0,0,0,0])
  const [newarraydataset, setNewarraydataset] = useState({
    labels: newarray,
    datasets: [
      {
        data: newarray
      }
    ]
  });
  
  // useEffect(() => {
  //   setNewarraydataset({
  //     labels: newarray,kj
  //     datasets: [
  //       {
  //         data: newarray,
  //       },
  //     ],
  //   });
  // }, [newarray]);

  
  const generateNewArray = () => {
    let randomlist = [];
    for (let i = 0; i <= 10; i++) {
      randomlist.push(Math.floor(Math.random() * 100));
    }
    
    const setValueAndCallback = (newValue, callback) => {
      setNewarray(prevValue => {
          if (callback) {
              callback(prevValue, newValue);
          }
          return newValue;
      });
    };
    
    console.log(newarray)
    return [randomlist, setValueAndCallback]
  };

  
  const swap = (arr,xp, yp) =>  { 
      let temp = arr[xp]; 
      arr[xp] = arr[yp]; 
      arr[yp] = temp; 
  } 
    
  const selectionSort = () => { 
    let i = 0
    let j = 0
    let min_idx = 0 
    let arr = newarray
  
    for (i = 0; i < length - 1; i++) { 
        min_idx = i; 
        for (j = i + 1; j < length; j++) 
        if (arr[j] < arr[min_idx]) 
            min_idx =   j;  
        setNewarray(arr)
        swap(arr,min_idx, i); 
        console.log(newarray)
      } 
    console.log(newarray)
  } 




  return (
    <div>
      <navbar>
        <button onClick={generateNewArray} className='bg-blue-100'>Generate new array</button>
        <button onClick={selectionSort} className='mx-2 bg-blue-100'>Sort Arrary</button>
      </navbar>
      <div className='mx-20 p-20'>
        <Bar data={newarraydataset} options={chartOptions}/>
      </div>
    </div>
  );
}
