import { Route, Routes } from "react-router-dom"

import List from "./pages/List"
import AddProduct from "./pages/AddProduct"
import EditProduct from "./pages/EditProduct"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<List/>} />
      <Route path="/add" element={<AddProduct/>} />
      <Route path="/edit/:id" element={<EditProduct/>} />
    </Routes>
  )
}
