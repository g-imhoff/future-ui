interface CommandDisplayProps {
  command: string;
}

export default function CommandDisplay(props: CommandDisplayProps) {
  return (
    <div className="p-1 m-1 w-fit h-fit border border-default-400 dark:border-default-500 rounded">
      <p className="text-xs sm:text-sm md:text-md text-default-400 dark:text-default-500">{props.command}</p>
    </div>
  )
}