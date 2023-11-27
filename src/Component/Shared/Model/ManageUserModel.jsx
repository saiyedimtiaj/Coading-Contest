/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const ManageUserModel = ({ closeModal,handleRole, isOpen,user,handleSelect }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Are You Sure To Update This User Role
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm font-semibold text-gray-500'>
                    Name: {user?.name}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm font-semibold text-gray-500'>
                    Email: {user?.email}
                  </p>
                </div>
                <div className='mt-2'>
                    <select onChange={handleSelect} defaultValue={user.role} className='border-2 border-black font-medium px-4 py-2' name="" id="">
                        <option value="admin">Admin</option>
                        <option value="creator">Creator</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <hr className='mt-5 mb-3 ' />
               <button onClick={handleRole} className='px-5 py-1.5 bg-blue-700 text-white font-medium rounded-md'>Update</button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ManageUserModel