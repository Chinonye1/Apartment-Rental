export function CreateApartmentForm({
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
    <section className="create-form-shell">
      <form className="create-form" onSubmit={onSubmit}>
        <label className="form-field">
          <span>Name</span>
          <input
            type="text"
            name="title"
            placeholder="Enter details"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </label>

        <label className="form-field">
          <span>Description</span>
          <textarea
            name="description"
            placeholder="Enter details"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
          />
        </label>

        <label className="form-field">
          <span>Image URL</span>
          <input
            type="url"
            name="picture_url"
            placeholder="https://example.com/image.jpg"
            value={imageUrl}
            onChange={(e) => onImageUrlChange(e.target.value)}
          />
        </label>

        <label className="form-field">
          <span>Price</span>
          <div className="currency-input">
            <span>$</span>
            <input
              type="number"
              name="price"
              placeholder="0.00"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => onPriceChange(e.target.value)}
            />
          </div>
        </label>

        <label className="form-field form-field-inline">
          <span>Available</span>
          <input
            type="checkbox"
            name="available"
            checked={available}
            onChange={(e) => onAvailableChange(e.target.checked)}
          />
        </label>

        <button className="create-form-button">Add apartment</button>
      </form>
    </section>
  );
}
