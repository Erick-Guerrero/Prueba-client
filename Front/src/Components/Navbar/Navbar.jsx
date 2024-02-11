import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import '../Navbar/Navbar.css';
import SelectDate from '../SelectDate/SelectDate';
import SelectNames from '../SelectNames/SelectNames';
import '../../assets/color.css'

const navigation = [
  { name: 'Como jugar', to: '/comojugar', current: false },
  { name: 'Numeros', to: '/', current: false },
  { name: 'Eres Ganador?', to: '/eresganador', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {

  
  return (
    <Disclosure
      as="nav"
      className="navbar1"
    >
      {({ open }) => (
        <>
          <div className="">
            <div className=" inset-y-0 left-0 flex  items-center sm:hidden h-16">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute align-center  -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
              <div
                className="sm:hidden flex items-center justify-center w-full"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <div className="logo">
                  <Link to="/">Logo</Link>
                </div>
              </div>
            </div>
            <div className="w-full  flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div
                className="hidden sm:flex items-center justify-start space-x-4 w-full sm:w-auto"
                style={{ width: '418px', justifyContent: 'center' }}
              >
                <div className="logo">
                  <Link to="/">Logo</Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex justify-center">
                <div className="flex justify-center items-center space-x-4 w-full">
                  {navigation.map((item) => (
                   <Link
                   key={item.name}
                   to={item.to}
                   className={classNames('custom-link')}
                   aria-current={item.current ? 'page' : undefined}
                 >
                   {item.name}
                 </Link>
                 
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="selectNames">
                  <SelectNames />
                  <SelectDate />
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'var(--color-global)' : '',
                            'block px-4 py-2 text-sm var(--color-global)'
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'var(--color-global)' : '',
                            'block px-4 py-2 text-sm var(--color-global)'
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'var(--color-global)' : '',
                            'block px-4 py-2 text-sm var(--color-global)'
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium',
                    {
                      'bg-customBack': item.current,
                      'var(--color-global)': !item.current,
                      'hover:bg-customGreen hover:text-customback': !item.current,
                    }
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <SelectNames />
              <SelectDate />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
