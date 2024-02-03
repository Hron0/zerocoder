import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-3">
        <Link to="/profile" className="text-lg text-black font-bold">Профиль (Профиль-КлючАПИ-Баланс)</Link>
        <Link to="/docs" className="text-lg text-black font-bold">Главная (Доки-Тарифы)</Link>
    </div>
  )
}

export default Home