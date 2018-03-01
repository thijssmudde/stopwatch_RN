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
  marginHorizontal: 30px;
  flex: 1;

  shadowColor: #000;
  shadowOffset: 0px 12px;
  shadowOpacity: 0.58;
  shadowRadius: 16.00px;
  
  elevation: 24px;
`

export const ButtonText = styled.Text `
  fontFamily: gt-walsheim-bold;
  color: #333;
  fontSize: 18px;
  letterSpacing: 2;
`