import AdminUsersFilters from "@/Components/AdminPage/AdminUsersFilters";
import UsersTable from "@/Components/AdminPage/UsersTable";
import AdminLayout from "@/Components/Layouts/AdminLayout"
import { Button } from '@/Components/UI/button';
import plus from '@/assets/plus.svg'
import plusW from '@/assets/plusW.svg'

const Users = () => {
  return (
    <>
      <AdminLayout>
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex flex-row items-end gap-6">
            <Button variant="destructive" className="items-end text-h7"><img src={plus} alt="+" width={24} /> <span>Добавить</span></Button>
            <Button variant="destructive" className="bg-blue-600 text-white items-end text-h7"><img src={plusW} alt="+" width={24} /> <span>Импорт</span></Button>
            <h2 className='text-h3 font-medium'>Пользователи</h2>
          </div>
          <AdminUsersFilters />
        </div>

        <UsersTable />
      </AdminLayout>
    </>
  )
}

export default Users