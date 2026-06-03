import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateApartmentForm } from "../components/CreateApartmentForm";

export function UpdateApartmentPage({ ItemArr, onUpdate }) {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const item = ItemArr?.find((element) => element.id === parseInt(detailId));

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (!item) {
      return;
    }

    setName(item.name ?? "");
    setDescription(item.description ?? "");
    setImageUrl(item.picture_url ?? "");
    setPrice(
      typeof item.price === "string"
        ? item.price.replace("$", "")
        : (item.price ?? ""),
    );
    setAvailable(Boolean(item.has_availability));
  }, [item]);

  if (!item) {
    return <p>Item not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate({
      ...item,
      name,
      description,
      picture_url: imageUrl,
      price: price ? `$${Number(price).toFixed(2)}` : "$0.00",
      has_availability: available,
    });

    navigate("/");
  };

  return (
    <CreateApartmentForm
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
      submitLabel="Update apartment"
    />
  );
}
