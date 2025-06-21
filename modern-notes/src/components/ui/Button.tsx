import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'rounded-md bg-black text-white px-4 py-2 hover:bg-gray-800 transition',
        className
      )}
      {...props}
    />
  )
}

export default Button
