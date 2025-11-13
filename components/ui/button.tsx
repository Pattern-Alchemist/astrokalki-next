import * as React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
}

export function Button({
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-all'
  
  const variants = {
    default: 'bg-purple-600 hover:bg-purple-700 text-white',
    outline: 'border border-purple-500 hover:bg-purple-500/10 text-purple-400',
    ghost: 'hover:bg-gray-800 text-gray-300'
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
