"use client";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useState } from 'react';


const chartOptions = {
  scales: {
    y: {
      max: 100,
      beginAtZero: true,
    },
  },
};

export default function Home() {

  const [newarray, setNewarray] = useState([0,0,0,0,0,0,0,0,0,0,0])
  const [newarraydataset, setNewarraydataset] = useState({
    labels: newarray,
    datasets: [
      {
        data: newarray
      }
    ]
  });
  
  const generateNewArray = (e) => {
    let randomlist = []
    for (let i = 0; i <= 10; i++) {
      randomlist.push(Math.floor(Math.random() * 100))
    }

    setNewarray((p) => {
      setNewarraydataset({
        labels: randomlist,
        datasets: [  
          {
            data: randomlist,
          },
        ],
  
      });
      return randomlist;   
    });


    console.log(newarray)
  }
  
  
  const selectionSort = () => {
    console.log(newarray)
  };


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
