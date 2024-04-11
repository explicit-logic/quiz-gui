function ResponderTable() {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Progress
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese" />
              <div className="ps-3">
                <div className="text-base font-semibold">Neil Sims</div>
                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
              </div>
            </th>
            <td className="px-6 py-4">8 / 10</td>
            <td className="px-6 py-4">0:10</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="/#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese" />
              <div className="ps-3">
                <div className="text-base font-semibold">Bonnie Green</div>
                <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
              </div>
            </th>
            <td className="px-6 py-4">2 / 10</td>
            <td className="px-6 py-4">0:15</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="/#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese" />
              <div className="ps-3">
                <div className="text-base font-semibold">Jese Leos</div>
                <div className="font-normal text-gray-500">jese@flowbite.com</div>
              </div>
            </th>
            <td className="px-6 py-4">9 / 10</td>
            <td className="px-6 py-4">1:10</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="/#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese" />
              <div className="ps-3">
                <div className="text-base font-semibold">Thomas Lean</div>
                <div className="font-normal text-gray-500">thomes@flowbite.com</div>
              </div>
            </th>
            <td className="px-6 py-4">Completed</td>
            <td className="px-6 py-4">0:11</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="/#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese" />
              <div className="ps-3">
                <div className="text-base font-semibold">Leslie Livingston</div>
                <div className="font-normal text-gray-500">leslie@flowbite.com</div>
              </div>
            </th>
            <td className="px-6 py-4">Started</td>
            <td className="px-6 py-4">3:20</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" /> Offline
              </div>
            </td>
            <td className="px-6 py-4">
              <a href="/#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit user
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ResponderTable;
