import styled from 'styled-components'

import {Button} from 'native-base'

const theme = {
  'reset': '#FFF',
  'start': '#E2E419',
  'stop': '#E42B6B',
  'resume': '#39B54A'
}

export const ButtonStyled = styled(Button)`
  backgroundColor: ${props => theme[props.type]};
  marginHorizontal: 30;
  flex: 1;
`

export const ButtonText = styled.Text `
  fontFamily: gt-walsheim-bold;
  color: #333;
  fontSize: 18;
  letterSpacing: 2;
`