interface TagProps {
  tag: string
}

export function Tag({ tag }: TagProps) {
  return (
    <div className="rounded-lg border border-neutral-400 p-1 text-base">
      {tag}
    </div>
  )
}
