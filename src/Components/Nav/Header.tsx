import React from 'react'
import { Button } from '@/Components/UI/button';
import { Link } from 'react-router-dom';

interface headerRoutes {
  route: string,
  name: string;
}

const Header = () => {
  const headerRoutes: headerRoutes[] = [
    { route: '..', name: 'Главная' },
    { route: '..', name: 'Бизнес' },
    { route: '/rates', name: 'Тарифы' },
    { route: '/docs', name: 'Документация' },
    { route: '..', name: 'Контакты' },
  ]

  return (
    <div className='flex flex-row justify-between bg-white px-[18%] py-3'>
      <nav className='flex flex-row gap-4'>
        {headerRoutes.map((data) =>
          <Link to={data.route} className='h-fit'>{data.name}</Link>
        )}
      </nav>

      <Button variant="destructive">Вход</Button>
    </div>
  )
}

export default Header