import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import list from "./assets/list.json";


import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'
import ItemCard from './pages/ItemCard'
import { AboutPage } from './pages/AboutPage'
import { DashboardPage } from './pages/DashboardPage'
import { ItemDetailsPage } from './pages/ItemDetailsPage'



function App() {

   const [apartmentList, setApartmentList] = useState(list.results);

     function handleDeleteItem(id) {
    setApartmentList(apartmentList.filter((element) => element.id !== id));
  }


  return  (
    <>
 <Navbar/>
 <Sidebar/>

    <Routes>
      <Route path="/" element={<ItemCard ItemArr={apartmentList} onDelete={handleDeleteItem}/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/details/:detailId" element={<ItemDetailsPage ItemArr={apartmentList}/>}/>
      <Route path='*' element={<h1>Page not found</h1>}/>
      
    </Routes>


<Footer/>

    </>
  )
}

export default App
