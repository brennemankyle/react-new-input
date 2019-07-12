import InternalNewInput from '../components/InternalNewInput/InternalNewInput'
import HtmlFieldData from '../components/HtmlFieldData/HtmlFieldData'
import AppendToBodyOptionsWrapper from '../components/AppendToBodyOptionsWrapper/AppendToBodyOptionsWrapper'
import { Wrapper, Selection, SelectionList, OptionList, Option, Search, SelectionWrapper, OptionWrapper, StyledAppendToBodyOptionsWrapper, DivHidden } from '../components/styledComponents/styledComponents'
import CheckRadio from '../components/CheckRadio/CheckRadio'
import filterOptions from './filterOptions'

const noop = () => {}

let defaultProps = {
  onChange: undefined,
  onBlur: noop,
  onFocus: noop,
  name: undefined,
  selection: [],
  options: [],
  placeholder: 'Select...',
  multiple: false,
  disabled: false,
  creatable: false,
  removable: true,
  appendToBody: false,
  rightToLeft: false,
  filterOptions: filterOptions,
  optionKeys: ['value', 'label'],
  text: {
    placeholder: '',
    noOptions: 'No Options',
    create: 'Create',
  },

  components: {
    SimpleNewInput: undefined,
    InternalNewInput,
    CheckRadio,
    DivHidden,
    HtmlFieldData,
    Wrapper,
    Selection,
    SelectionList,
    OptionList,
    Option,
    Search,
    SelectionWrapper,
    OptionWrapper,
    AppendToBodyOptionsWrapper,
    StyledAppendToBodyOptionsWrapper,
  },

  styles: {
    fontSize: '1em',
    borderRadius: '.2em',
    paddingTop: '.25em',
    paddingBottom: '.25em',
    paddingLeft: '.25em',
    paddingRight: '.25em',
    selection: {
      paddingTop: '0',
      paddingBottom: '0',
      paddingLeft: '.2em',
      paddingRight: '.2em',
    },
    option: {
      paddingTop: '.25em',
      paddingBottom: '.25em',
      paddingLeft: '.25em',
      paddingRight: '.25em',
    },
    search: {
      width: '10em',
    },
    icon: {
      width: '1em',
    },
    colors: {
      primary: 'black',
      secondary: 'lightgray',
      highlight: 'lightblue',
      warning: '#CD5C5C',
      disabled: '#ECECEC',
      background: 'white',
    }
  }
}

export default defaultProps
