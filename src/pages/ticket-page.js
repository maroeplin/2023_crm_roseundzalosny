import { useState } from "react";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });

  const editMode = false;

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const categories = ["test1", "test2"];

  return (
    <div className="ticket">
      <h1>{editMode ? "Update Ticket" : "Create a Ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Titel</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />

            <label htmlFor="description">Beschreibung</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label>Kategorie</label>
            <select name="category" value={formData} onChange={handleChange}>
              {categories?.map((category, _index) => (
                <option key={_index} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor="new-category">Neue Kategorie</label>
            <input
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />

            <label>Priority</label>
            <div className="multiple-input-container">
              <input
                id="priority-1"
                type="checkbox"
                name="priority"
                onChange={handleChange}
                value={1}
                checked={formData.priority === 1}
              />
              <label htmlFor="priority-1">1</label>

              <input
                id="priority-2"
                type="checkbox"
                name="priority"
                onChange={handleChange}
                value={1}
                checked={formData.priority === 2}
              />
              <label htmlFor="priority-2">2</label>

              <input
                id="priority-3"
                type="checkbox"
                name="priority"
                onChange={handleChange}
                value={1}
                checked={formData.priority === 3}
              />
              <label htmlFor="priority-3">3</label>

              <input
                id="priority-4"
                type="checkbox"
                name="priority"
                onChange={handleChange}
                value={1}
                checked={formData.priority === 4}
              />
              <label htmlFor="priority-4">4</label>

              <input
                id="priority-5"
                type="checkbox"
                name="priority"
                onChange={handleChange}
                value={1}
                checked={formData.priority === 5}
              />
              <label type="checkbox" htmlFor="priority-5">
                5
              </label>
            </div>

            {editMode && (
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label htmlFor="progress">Progress</label>

                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status === "done"} value={"done"}>
                    Erledigt
                  </option>
                  <option
                    selected={formData.status === "arbeite daran"}
                    value={"arbeite daran"}
                  >
                    Arbeite daran
                  </option>
                  <option
                    selected={formData.status === "hänge fest"}
                    value={"hänge fest"}
                  >
                    Hänge
                  </option>
                </select>
              </>
            )}

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="owner">Besitzer</label>
            <input
              type="owner"
              id="owner"
              name="text"
              value={formData.owner}
              onChange={handleChange}
              required={true}
            />

            <label htmlFor="avatar">Avatar</label>
            <input
              type="avatar"
              id="avatar"
              name="url"
              value={formData.owner}
              onChange={handleChange}
              required={true}
            />
            <div className="img-preview">
              {formData.avatar && <img src={formData.avatar} alt="vorschau" />}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
