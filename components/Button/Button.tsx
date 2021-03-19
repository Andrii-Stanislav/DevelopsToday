import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 10px;
  margin-left: 15px;
  background-color: grey;
  border: none;
  outline: none;
  transition: all 250ms linear;

    &:hover {
        color: #fff;
        box-shadow: 0 0 10px grey;
        transform: scale(1.05);
    }
`

export default Button;
