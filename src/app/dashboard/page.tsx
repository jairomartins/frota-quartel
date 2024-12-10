"use client";

import { useRouter } from "next/navigation"; // Importar corretamente de next/navigation

export default function Home() {
  const router = useRouter(); // Aqui chamamos o useRouter corretamente de next/navigation
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="w-full text-center bg-blue-600 text-white py-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold">Gerenciador de Frota</h1>
      </header>

      {/* Content */}
      <main className="flex flex-col items-center justify-center flex-1 w-full space-y-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-700">Gerencie sua frota</h2>
      <ul className="w-full max-w-sm space-y-4">
        <li className="bg-white rounded-lg shadow-lg p-4 text-center hover:bg-blue-50 transition">
          <button
            onClick={() => router.push("/dashboard/motos")}
            className="text-lg font-medium text-gray-800"
          >
            Motocicletas
          </button>
        </li>
        <li className="bg-white rounded-lg shadow-lg p-4 text-center hover:bg-blue-50 transition">
          <button
            onClick={() => router.push("/dashboard/veiculos")}
            className="text-lg font-medium text-gray-800"
          >
            Veículos
          </button>
        </li>
        <li className="bg-white rounded-lg shadow-lg p-4 text-center hover:bg-blue-50 transition">
          <button
            onClick={() => router.push("/dashboard/outros")}
            className="text-lg font-medium text-gray-800"
          >
            Outros
          </button>
        </li>
      </ul>
    </main>

      {/* Footer */}
      <footer className="w-full text-center text-gray-500 text-sm py-4">
        <p>&copy; 2024 SD J. Martins</p>
      </footer>
    </div>
  );
}
