import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
    <h1>Страница не найдена</h1>
    <p>
      Вернуться на <Link to="/cities">главную страницу</Link>
    </p>
  </div>
  )
}

export default NotFound
