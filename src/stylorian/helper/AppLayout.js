import React from 'react'
import '../styles/all.scss'

const AppLayout = (WrapComponent) => {
  return class extends React.PureComponent {
    render() {
      return <WrapComponent {...this.props} />;
    }
  };
};

export default AppLayout;