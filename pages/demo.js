import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@components/Loading";
import Sorteo from "@components/Sorteo";

export default function Demo() {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [lottoData, setLottoData] = useState({});
  const [lottoImage, setLottoImage] = useState("");
  const validImageType = ["image/gif", "image/jpeg", "image/png", "image/jpg"];

  const handlerUploadImage = (e) => {
    const file = e.target.files[0];
    setIsLoading(true);
    if (validImageType.includes(file.type)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setLottoImage(reader.result);
        setLottoData({ ...lottoData, image: reader.result });
      }
    } else {
      e.target.value = null;
      alert("El archivo no es una imagen válida");
    }
      setIsLoading(true);
      setLottoData({ ...lottoData, image: file });
      setIsLoading(false);
    };

  const handlerTerms = () => {
    setIsAgreed(!isAgreed);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setLottoData({
      ...lottoData,
      name: e.target.name.value,
      description: e.target.description.value,
      numbers: Number(e.target.numbers.value),
      date: new Date(e.target.date.value.split('-')).toLocaleDateString('es-MX'),
      contact: e.target.contact.value
    });

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    }, 7000);
    setIsReady(true);
  };

  return (
    <>
      {
        !isReady &&
        <div className="gap">
        <h1>Bienvenido a tu sorteo</h1>
        <p>Ingresa los datos para generar tu sorteo</p>
        </div>
      }

      {
        !isReady &&
        <form className="w-full max-w-sm inline-block" onSubmit={handlerSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name" >
              Nombre del sorteo
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" defaultValue="Sorteo entre amigos" required="required" />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              ¿Qué sorteas?
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="description" type="text" defaultValue="Camioneta Jeep 2022" required="required" />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Números a sortear
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="numbers" type="number" defaultValue="100" required="required" />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Fecha del sorteo
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date" type="date" required="required" />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Foto
            </label>
          </div>
          <div className="md:w-2/3">
            Image
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="picture" type="file" accept="image/*" required="required" onChange={handlerUploadImage} />
            {
              lottoImage ? <Image src={`data:${lottoImage}`} alt="Lotto Image" width={150} height={150} /> : null
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Contacto
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="contact" type="text" defaultValue="Jane Doe" required="required" />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" id="terms" onChange={handlerTerms} />
            <span className="text-sm">
              <Link href="/terminos-y-condiciones">
                Acepto los terminos y condiciones
              </Link>
            </span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            {
              isAgreed && !isLoading
                ?
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                  Crear Sorteo
                </button>
                :
                <button disabled className="shadow focus:shadow-outline focus:outline-none text-gray-300	 font-bold py-2 px-4 rounded">
                  Crear Sorteo
                </button>
            }
          </div>
        </div>
        </form>
      }

      <div className="inline-block margin-auto">
        {isLoading ? <Loading /> : null}
        {!isLoading && isReady ? <Sorteo lottoData={lottoData} /> : null}
      </div>
    </>
  )
}