import * as React from 'react'

export const Loupe: React.FC<React.SVGProps<SVGSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.12512 14.2502C11.5079 14.2502 14.2502 11.5079 14.2502 8.12512C14.2502 4.74231 11.5079 2 8.12512 2C4.74231 2 2 4.74231 2 8.12512C2 11.5079 4.74231 14.2502 8.12512 14.2502Z"
        stroke="black"
      />
      <path d="M16.0005 15.9984L12.4841 12.482" stroke="black" />
    </svg>
  )
}
