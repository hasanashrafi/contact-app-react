import { BrowserRouter, Route, Routes } from "react-router-dom"
import ContactPage from "./components/ContactPage"
import Layout from "./layout/Layout"
import HomePahe from "./components/HomePage"
import AddContactPage from "./components/AddContactPage"

function App() {


  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePahe/>} />
          <Route path="/add-contact" element={<AddContactPage/>} />
          <Route path="/contacts" element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
