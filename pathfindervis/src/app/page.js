"use client";
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
export default function Home() {
  let array = []

  for (let i = 0; i <= 10; i++) {
    array.push(Math.floor(Math.random() * 100))
  }
  console.log(array)
  
  const [newarray, setNewarray] = useState({
    labels: array,
    datasets: [
      {
        label: "Sort",
        data: array
      }
    ]
  });

  return (
    <div>
      <p>Hello world</p>
      <Line data={newarray}/>
    </div>
  );
}
