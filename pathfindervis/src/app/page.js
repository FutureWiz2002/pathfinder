"use client";
import Image from "next/image";

export default function Home() {
  const rows = 15
  const cols = 40

  const trigger = (row, col) => {
    console.log(row, col)
  }
  return (



    <div className="p-6">
      <p className="text-2xl py-5">Pathfinding visualizer</p>
      <table className="border p-4">
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: cols }).map((_, colIndex) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className="p-4 border border-slate-600 border-spacing-1"
                  onClick={() => trigger(rowindex, colIndex)}
                >
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
