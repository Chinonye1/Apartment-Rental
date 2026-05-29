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

   const [description, setDescription] = useState("")

   const [name, setName] = useState("")

  const [available, setAvailable] = useState(false)

     function handleDeleteItem(id) {
    setApartmentList(apartmentList.filter((element) => element.id !== id));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const apartmentIds = apartmentList.map((item) =>{
      return item.id;
    });

    const maxId= Math.max(...apartmentIds);
    const nextId = maxId + 1



   
    const newApartment= {
      id: nextId,
      name: name,
      description: description,
      has_availability: available



    }
    console.log(newApartment)

  

    const newList = [newApartment,...apartmentList]

    setApartmentList(newList)

    setName("")
    setDescription("")
    setAvailable("")
  }


  return  (
    <>
 <Navbar/>
 <Sidebar/>
 {/* create form */}
 <section>
  <form onSubmit={handleSubmit}>
    <label>
      Name:
    <input 
    type='text' 
    name='title' 
    placeholder='Enter details' 
    value={name} 
    onChange= {(e) => {setName(e.target.value)}}/>
    </label>

      <label>
      Description:
    <input 
    type='text' 
    name='description' 
    placeholder='Enter details' 
    value={description} 
    onChange= {(e) => {setDescription(e.target.value)}}/>
    </label>


      <label>
      Available:
    <input 
    type='checkbox' 
    name='available' 
    checked={available} 
    onChange= {(e) => {setAvailable(e.target.checked)}}/>
    </label>
    
    <button>Add apartment</button>
  </form>

 </section>

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
