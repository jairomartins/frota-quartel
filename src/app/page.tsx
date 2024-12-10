"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // Aqui chamamos o useRouter corretamente de next/navigation
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <h1>Sistema para gerenciar as viaturas ( Balsas - MA )</h1>
      <>
      <button
          onClick={() => router.push("/dashboard")}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >Entrar</button>
      </>
      
        
    </div>
  );
}
