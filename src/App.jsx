import React from 'react';
import { LuBellRing, LuPlus } from 'react-icons/lu';

function App() {
  
  return (
    <div>
      <div>
        <div className="bg-zinc-100 m-7 mb-3 p-5 rounded-2xl drop-shadow-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <LuBellRing className="text-3xl text-purple-500" />
            <div>
              <h1 className="text-3xl font-bold">
                Sistema de Assinatura
              </h1>
              <p>Gerenciamento com notificações automáticas via WhatsApp</p>
            </div>
          </div>
          
          <div className="flex items-center text-white bg-purple-500 p-3 rounded-2xl">
            <LuPlus className="text-3xl"/>
            <p className="text-xl">Nova Assinatura</p>
          </div>
        </div>

        <div className="mt-3 m-7 p-5 rounded-2xl drop-shadow-lg w-auto flex items-center space-x-7">
          <p className="bg-purple-500 px-4 py-2 rounded-lg">Todas (0)</p>
          <p>Ativas</p>
          <p>Inativas</p>
        </div>
        <div className="bg-zinc-100 m-7 mb-3 p-5 rounded-2xl drop-shadow-lg">
          
        </div>
      </div>
    </div>
  );
}

export default App;