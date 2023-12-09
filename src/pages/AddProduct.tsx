import { useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../api"

import type IProduct from "./types/IProduct"

export default function AddProduct() {
  const [product, setProduct] = useState<IProduct>({} as IProduct)
  const navigate = useNavigate()

  async function addProduct(): Promise<void> {
    await api.post('/produtos', product)
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center justify-center h-[100dvh]">
      <h1 className='font-bold mb-8'>Adicionar produto</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="codigo">Código</label>
          <input
            type="text"
            name="codigo"
            id="codigo"
            className='rounded p-2 bg-gray-400'
            value={product.codigo}
            onChange={event => setProduct({ ...product, codigo: event.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            name="descricao"
            id="descricao"
            className='rounded p-2 bg-gray-400'
            value={product.descricao}
            onChange={event => setProduct({ ...product, descricao: event.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="custoProducao">Custo da produção</label>
          <input
            type="text"
            name="custoProducao"
            className='rounded p-2 bg-gray-400'
            id="custoProducao"
            value={product.custoProducao}
            onChange={event => setProduct({ ...product, custoProducao: event.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="quantidadeEstoque">Quantidade no estoque</label>
          <input
            type="text"
            name="quantidadeEstoque"
            className='rounded p-2 bg-gray-400'
            id="quantidadeEstoque"
            value={product.quantidadeEstoque}
            onChange={event => setProduct({ ...product, quantidadeEstoque: event.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="unidade">Unidade</label>
          <input
            type="text"
            name="unidade"
            id="unidade"
            className='rounded p-2 bg-gray-400'
            value={product.unidade}
            onChange={event => setProduct({ ...product, unidade: event.target.value })}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <button
          className='bg-green-500 py-3 px-12 rounded'
          onClick={addProduct}
        >
          Salvar
        </button>
      </div>
    </div>
  )
}
