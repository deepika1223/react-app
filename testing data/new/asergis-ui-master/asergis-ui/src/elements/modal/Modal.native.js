import { render } from 'react-dom';
import { View } from 'native-base';

const ModalView = (props) => {
  const { name, title, children, show, toggle, className, buttons = [] } = props;

  return (
    <View />
  )
}

export default ModalView;