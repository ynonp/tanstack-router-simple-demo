import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2">
    Hello from About!
    <Link to='/'>Type Safe?</Link>
  </div>
}
