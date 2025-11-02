import { Link } from "react-router-dom";
import s from "./Navihation.module.css";


export const Navgigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/generate" className={s.hn}>Генерировать QR код</Link>
      <Link to="/scan" className={s.hn}>Сканировать QR код </Link>
      <Link to="/scanHistory" className={s.hn}>История Сканирования</Link>
      <Link to="/generateHistory" className={s.hn}>История генерирования</Link>
    </nav>
  );
};
