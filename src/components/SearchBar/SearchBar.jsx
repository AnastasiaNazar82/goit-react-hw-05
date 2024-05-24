import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBart({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim();

    if (!value) {
      return toast.error("This input can't be empty!", {
        duration: 5000,
        position: "top-right",
      });
    }
    onSubmit(value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          placeholder="Search images and photos"
          name="search"
          autoFocus
        />
        <button className={css.button} type="submit">
        </button>
      </form>
    </header>
  );
}