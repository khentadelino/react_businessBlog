import { PenLine } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="shadow">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span
            className="inline-flex h-10 w-10 items-center justify-center text-primary"
            aria-hidden="true"
          >
            <PenLine />
          </span>
          <span className='text-primary'>BusinessBlog</span>
        </NavLink>

        <div className="flex flex-wrap items-center gap-3 text-sm font-medium sm:text-base">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex w-20 rounded-md px-4 py-2 text-center justify-center transition-colors ${
                  isActive ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
