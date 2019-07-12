import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import AppPropTypes from '../../utils/AppPropTypes'

let CheckRadio = (props, ref) => {
  let massagedProps = props.massaged ? props : props.massageData(props)

  let { CheckBox, Radio } = props.components

  return <div className={props.className} ref={ref}>{massagedProps.multiple
    ? <CheckBox name={props.name} multiple={props.multiple} options={props.options} styles={props.styles} />
    : <Radio name={props.name} multiple={props.multiple} options={props.options} styles={props.styles} />}</div>
}

CheckRadio = forwardRef(CheckRadio)

CheckRadio.defaultProps = {
  hide: false,
}

CheckRadio.propTypes = {
  hide: PropTypes.bool.isRequired,
  multiple: PropTypes.bool.isRequired,
  options: AppPropTypes.itemList.isRequired,
  styles: AppPropTypes.styles.isRequired,
}

export default CheckRadio