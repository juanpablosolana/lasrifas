import { useEffect, useState } from "react";

const Loading = () => {

  const [mensaje, setMensaje] = useState([])
  useEffect(() => {
    const mensajes = ['Cargando servicios', 'Generando layout', 'Aplicando configuración..', 'Finalizando...']
    mensajes.map((item, index) => {
      setTimeout(() => {
        setMensaje(item)
      }, 4000 * index)
    }
    )
  }, []);

  return (
    <div className="flex justify-center items-center gap-4">
      <div
        className=" animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">
      </div>
      <div className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {mensaje}
      </div>
    </div >
  )

};

export default Loading;