import { Menu, PenLine, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
      <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <PenLine size={20} />
            </span>
            <span className="text-primary">BusinessBlog</span>
          </NavLink>

          <button
            type="button"
            className="sm:hidden flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`
            ${isOpen ? 'flex' : 'hidden'}
            flex-col gap-3 pt-4 sm:flex sm:flex-row sm:items-center sm:gap-6 sm:pt-0
          `}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md
                ${
                  isActive
                    ? 'text-white bg-primary shadow'
                    : 'text-slate-700 hover:text-primary hover:bg-primary/10'
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