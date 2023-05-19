import * as React from 'react'

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  ...props
}) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.15634 0.5L0.134602 1.52174L7.04484 8.43197L0.117187 15.3596L1.13893 16.3814L8.06658 9.45371L14.9788 16.3659L16.0005 15.3442L9.08832 8.43197L15.9831 1.5372L14.9613 0.51546L8.06658 7.41023L1.15634 0.5Z" fill="#A7A7A7" />
    </svg>
  )
}