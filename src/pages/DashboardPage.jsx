import { CreateApartmentForm } from "../components/CreateApartmentForm";

export function DashboardPage({
  name,
  description,
  imageUrl,
  price,
  available,
  onNameChange,
  onDescriptionChange,
  onImageUrlChange,
  onPriceChange,
  onAvailableChange,
  onSubmit,
}) {
  return (
    <CreateApartmentForm
      name={name}
      description={description}
      imageUrl={imageUrl}
      price={price}
      available={available}
      onNameChange={onNameChange}
      onDescriptionChange={onDescriptionChange}
      onImageUrlChange={onImageUrlChange}
      onPriceChange={onPriceChange}
      onAvailableChange={onAvailableChange}
      onSubmit={onSubmit}
    />
  );
}
