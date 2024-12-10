"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const motorcycleDetails = {
  id: 1,
  prefix: "VTR001",
  model: "Yamaha MT-03",
  brand: "Yamaha",
  plate: "ABC-1234",
  year: 2023,
  km: 14800,
  status: "Em uso",
  observation: "",
  maintenanceHistory: [
    { item: "Troca de óleo", date: "2024-01-01", nextKm: 15000 },
    { item: "Troca de pneus", date: "2024-05-01", nextKm: 20000 },
  ],
};

export default function MotorcycleDetails() {
  const [motorcycle, setMotorcycle] = useState(motorcycleDetails);
  const [newKm, setNewKm] = useState(motorcycle.km);
  const [observation, setObservation] = useState("");
  const router = useRouter();


  // Atualizar quilometragem
  const updateKm = (e: React.FormEvent) => {
    e.preventDefault();
    setMotorcycle({ ...motorcycle, km: newKm });
  };

  // Atualizar observação
  const updateObservation = (e: React.FormEvent) => {
    e.preventDefault();
    setMotorcycle({ ...motorcycle, observation });
  };


  // Marcar manutenção como concluída
  const markMaintenanceAsDone = (index: number) => {
    const updatedHistory = [...motorcycle.maintenanceHistory];
    updatedHistory[index].nextKm = 0; // Remove o próximo KM
    setMotorcycle({ ...motorcycle, maintenanceHistory: updatedHistory });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full text-center bg-blue-600 text-white py-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Detalhes da Viatura</h1>
      </header>

      {/* Detalhes da Viatura */}
      <section className="flex flex-col flex-1 w-full max-w-5xl space-y-4 mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Informações da Viatura</h2>
        <p><strong>Prefixo:</strong> {motorcycle.prefix}</p>
        <p><strong>Marca:</strong> {motorcycle.brand}</p>
        <p><strong>Modelo:</strong> {motorcycle.model}</p>
        <p><strong>Placa:</strong> {motorcycle.plate}</p>
        <p><strong>Ano:</strong> {motorcycle.year}</p>
        <p><strong>Quilometragem:</strong> {motorcycle.km} km</p>
        <p><strong>Status:</strong> {motorcycle.status}</p>
        {motorcycle.observation && (
          <p className="text-red-600 mt-2"><strong>Observação:</strong> {motorcycle.observation}</p>
        )}
      </section>

      {/* Atualizar Quilometragem e Observação */}
      <section className="flex flex-col flex-1 w-full max-w-5xl space-y-4 mt-6 bg-white p-4 rounded-lg shadow-md">
        <form onSubmit={updateKm} className="mb-4 w-full">
          <label className="block mb-2">Quilometragem (KM)</label>
          <input
            type="number"
            value={newKm}
            onChange={(e) => setNewKm(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Atualizar Quilometragem
          </button>
        </form>
      </section>


      {/* <section className="mt-6 bg-white p-4 rounded-lg shadow-md"> */}
        
      {/* </section> */}


      {/* Histórico de Manutenções */}
      <section className="flex flex-col flex-1 w-full max-w-5xl space-y-4 mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Histórico de Manutenções</h2>
        <button
          onClick={() => router.push("/dashboard/motos/manutencao")}
          className="bg-blue-600  text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Cadastrar Nova Manutenção
        </button>
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Item</th>
              <th className="px-4 py-2">Data</th>
              <th className="px-4 py-2">KM Próxima Manutenção</th>
            </tr>
          </thead>
          <tbody>
            {motorcycle.maintenanceHistory.map((maintenance, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{maintenance.item}</td>
                <td className="px-4 py-2">{maintenance.date}</td>
                <td
                  className={`px-4 py-2 ${
                    maintenance.nextKm &&
                    motorcycle.km >= maintenance.nextKm - 200
                      ? "text-red-600"
                      : maintenance.nextKm === null
                      ? "text-green-600"
                      : ""
                  }`}
                  onClick={() =>
                    maintenance.nextKm &&
                    confirm("Marcar manutenção como concluída?") &&
                    markMaintenanceAsDone(index)
                  }
                >
                  {maintenance.nextKm || 'Já Realizada'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
