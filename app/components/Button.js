import React from 'react'
import PropTypes from 'prop-types';

import {ButtonStyled, ButtonText} from '../styledComponents/button'

export default class Button extends React.Component {
  render() {
    return (
      <ButtonStyled type={this.props.type} rounded block onPress={this.props.onPress}>
        <ButtonText>{this.props.type.toUpperCase()}</ButtonText>
      </ButtonStyled>
    )
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['reset', 'start', 'resume', 'stop'])
}

Button.defaultProps = {
  type: 'reset'
}