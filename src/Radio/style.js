import styled from 'styled-components'

export const LabelWrapper = styled.label`
  flex-grow: 1;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`

export const Checkbox = styled.div`
  width: 1em;
  height: 1em;
  border: 1px solid ${({ theme }) => theme.colors.grays.med};
  border-radius: 50%;
  margin-right: 0.5em;
`

export const Input = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;

  &:checked ~ ${Checkbox} {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
      background: ${({ theme }) => theme.colors.blue};
      border-radius: 50%;
    }
  }
`
