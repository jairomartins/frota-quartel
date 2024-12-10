"use client";

import React from "react";
import { useRouter } from "next/navigation";

const motorcycles = [
  {
    id: 1,
    prefix: "VTR001",
    brand: "Yamaha",
    model: "MT-03",
    plate: "ABC-1234",
    km: 15000,
    status: "Em uso",
  },
  {
    id: 2,
    prefix: "VTR002",
    brand: "Honda",
    model: "CB 500X",
    plate: "XYZ-5678",
    km: 25000,
    status: "Em manutenção",
  },
];

export default function MotorcyclesList() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full text-center bg-blue-600 text-white py-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Lista de Viaturas</h1>
      </header>

      <main className="flex flex-col flex-1 w-full max-w-5xl mt-6 space-y-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <button
            onClick={() => router.push("/dashboard/motos/cadastro")}
            className="mb-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Cadastrar Nova Viatura
          </button>
          <table className="w-full mt-4 table-auto">
            <thead>
              <tr className="text-center bg-gray-100">
                <th className="px-4 py-2">Prefixo</th>
                {/* <th className="px-4 py-2">Marca</th>
                <th className="px-4 py-2">Modelo</th> */}
                <th className="px-4 py-2">Placa</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {motorcycles.map((motorcycle) => (
                <tr
                  key={motorcycle.id}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => router.push(`/dashboard/motos/detalhes/`)}
                >
                  <td className="px-4 py-2">{motorcycle.prefix}</td>
                  {/* <td className="px-4 py-2">{motorcycle.brand}</td>
                  <td className="px-4 py-2">{motorcycle.model}</td> */}
                  <td className="px-4 py-2">{motorcycle.plate}</td>
                  <td className="px-4 py-2">{motorcycle.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
