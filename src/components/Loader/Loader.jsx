import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader({ isLoading }) {
  return (
    <div className={css.loader}>
      <MagnifyingGlass
        visible={isLoading}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
}
