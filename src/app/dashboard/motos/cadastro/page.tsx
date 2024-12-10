"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function MotorcycleForm() {
  const router = useRouter();
  const [newMotorcycle, setNewMotorcycle] = useState({
    prefix: "",
    brand: "",
    model: "",
    plate: "",
    km: "",
    status: "Em uso",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nova motocicleta cadastrada:", newMotorcycle);
    router.push("/dashboard/motos");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full text-center bg-blue-600 text-white py-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Cadastro de Viatura</h1>
      </header>

      <main className="flex flex-col flex-1 w-full max-w-5xl mt-6 space-y-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Prefixo (Ex: VTR001)"
            value={newMotorcycle.prefix}
            onChange={(e) =>
              setNewMotorcycle({ ...newMotorcycle, prefix: e.target.value })
            }
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="text"
            placeholder="Marca"
            value={newMotorcycle.brand}
            onChange={(e) =>
              setNewMotorcycle({ ...newMotorcycle, brand: e.target.value })
            }
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="text"
            placeholder="Modelo"
            value={newMotorcycle.model}
            onChange={(e) =>
              setNewMotorcycle({ ...newMotorcycle, model: e.target.value })
            }
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="text"
            placeholder="Placa"
            value={newMotorcycle.plate}
            onChange={(e) =>
              setNewMotorcycle({ ...newMotorcycle, plate: e.target.value })
            }
            className="border border-gray-300 rounded p-2"
            required
          />
          <input
            type="number"
            placeholder="Quilometragem"
            value={newMotorcycle.km}
            onChange={(e) =>
              setNewMotorcycle({ ...newMotorcycle, km: e.target.value })
            }
            className="border border-gray-300 rounded p-2"
            required
          />
          <select
            value={newMotorcycle.status}
            onChange={(e) =>
              setNewMotorcycle({ ...newMotorcycle, status: e.target.value })
            }
            className="border border-gray-300 rounded p-2"
          >
            <option value="Em uso">Em uso</option>
            <option value="Em manutenção">Em manutenção</option>
          </select>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Cadastrar Viatura
          </button>
        </form>
      </main>
    </div>
  );
}
