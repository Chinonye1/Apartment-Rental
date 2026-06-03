import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import list from "./assets/list.json";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import ItemCard from "./pages/ItemCard";
import { AboutPage } from "./pages/AboutPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ItemDetailsPage } from "./pages/ItemDetailsPage";

function App() {
  const [apartmentList, setApartmentList] = useState(list.results);

  const [description, setDescription] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const [available, setAvailable] = useState(false);

  function handleDeleteItem(id) {
    setApartmentList(apartmentList.filter((element) => element.id !== id));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const apartmentIds = apartmentList.map((item) => {
      return item.id;
    });

    const maxId = Math.max(...apartmentIds);
    const nextId = maxId + 1;

    const newApartment = {
      id: nextId,
      name: name,
      description: description,
      picture_url: imageUrl,
      price: price ? `$${Number(price).toFixed(2)}` : "$0.00",
      has_availability: available,
    };
    console.log(newApartment);

    const newList = [newApartment, ...apartmentList];

    setApartmentList(newList);

    setName("");
    setDescription("");
    setImageUrl("");
    setPrice("");
    setAvailable(false);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemCard ItemArr={apartmentList} onDelete={handleDeleteItem} />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/dashboard"
          element={
            <DashboardPage
              name={name}
              description={description}
              imageUrl={imageUrl}
              price={price}
              available={available}
              onNameChange={setName}
              onDescriptionChange={setDescription}
              onImageUrlChange={setImageUrl}
              onPriceChange={setPrice}
              onAvailableChange={setAvailable}
              onSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/details/:detailId"
          element={<ItemDetailsPage ItemArr={apartmentList} />}
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
