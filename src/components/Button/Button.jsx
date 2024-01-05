import { ButtonOr } from './style'

function ButtonOrange({ children, ...props }) {
  return <ButtonOr {...props}>{children}</ButtonOr>
}

export default ButtonOrange
