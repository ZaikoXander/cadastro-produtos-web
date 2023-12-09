import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../api"

import type IProduct from "./types/IProduct"

export default function List() {
  const [products, setProducts] = useState<IProduct[]>()
  const navigate = useNavigate()

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/produtos')

      setProducts(response.data.produtos)
    }

    loadProducts()
  }, [])

  async function deleteProduct(productId: number): Promise<void> {
    await api.delete(`/produtos/${productId}`)
    setProducts(products?.filter(product => product.id !== productId))
  }

  return (
    <div className="flex flex-col items-center justify-center h-[100dvh]">
      {
        products === undefined ? (
          <h1 className='font-bold text-xl'>Carregando...</h1>
        ) :
        (
          <>
            <h1 className='font-bold my-8'>Lista dos produtos</h1>
            <button
              onClick={() => navigate('/add')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Adicionar novo produto
            </button>
            <div className="flex flex-col gap-2 my-4 overflow-y-scroll">
              {
                products.map(product => (
                  <div className="border-solid border-2 border-black rounded p-3 flex flex-col gap-2 w-72" key={product.id}>
                    <div>
                      <h2>Código: {product.codigo}</h2>
                      <p>Descrição: {product.descricao}</p>
                      <p>Custo da produção: {product.custoProducao}</p>
                      <p>Quantidade no estoque: {product.quantidadeEstoque}</p>
                      <p>Unidade: {product.unidade}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => navigate(`/edit/${product.id}`)}
                      >
                        Editar
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </>
        )
      }
    </div>
  )
}