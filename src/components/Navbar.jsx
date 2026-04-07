import { NavLink } from 'react-router-dom'

function PencilLine(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 3.487a2.25 2.25 0 1 1 3.182 3.182L8.25 18.462 3.75 19.5l1.038-4.5L16.862 3.487Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 4.5 3.75 3.75" />
    </svg>
  )
}

export default function Navbar() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="border-b">
      <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <PencilLine className="h-5 w-5" />
          </span>
          <span>BusinessBlog</span>
        </NavLink>

        <div className="flex flex-wrap items-center gap-6 text-sm font-medium sm:text-base">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className="transition-opacity hover:opacity-70"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
