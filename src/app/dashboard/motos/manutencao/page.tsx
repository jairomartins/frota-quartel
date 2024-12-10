"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ManutencaoCadastro() {
  const router = useRouter();
  const [maintenance, setMaintenance] = useState({
    item: "",
    date: "",
    nextKm: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!maintenance.item || !maintenance.date) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    // Enviar os dados para o backend ou salvar no estado global
    console.log("Manutenção cadastrada:", maintenance);

    // Redirecionar para a página de detalhes ou listagem de motos
    router.push("/dashboard/motos/detalhes");

    // Resetar o formulário
    setMaintenance({
      item: "",
      date: "",
      nextKm: "",
    });

    alert("Manutenção cadastrada com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <header className="w-full text-center bg-blue-600 text-white py-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Cadastrar Manutenção</h1>
      </header>
      <main className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-sm mb-2">Item</label>
            <input
              type="text"
              placeholder="Ex: Troca de óleo"
              value={maintenance.item}
              onChange={(e) =>
                setMaintenance({ ...maintenance, item: e.target.value })
              }
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-sm mb-2">Data</label>
            <input
              type="date"
              value={maintenance.date}
              onChange={(e) =>
                setMaintenance({ ...maintenance, date: e.target.value })
              }
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-sm mb-2">
              KM para Próxima Manutenção
            </label>
            <input
              type="number"
              placeholder="Opcional"
              value={maintenance.nextKm}
              onChange={(e) =>
                setMaintenance({ ...maintenance, nextKm: e.target.value })
              }
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}
