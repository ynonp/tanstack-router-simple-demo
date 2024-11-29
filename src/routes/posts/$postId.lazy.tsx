import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/posts/$postId')({
  component: Post,
})

function Post() {
  const { postId } = Route.useParams()
  return <div className="p-2">This is post number: {postId}</div>
}
