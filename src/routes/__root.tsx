import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold ">
          About
        </Link>
        <Link to="/posts/7" className="[&.active]:font-bold ">
          Read Post
        </Link>
      </div>      
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})