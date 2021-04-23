/* eslint-disable import/extensions */
import React from 'react';
import ProductQuestionManager from './components/q&a/ProductQuestionManager/main.jsx'
import ProductOverview from './components/productOverview/ProductOverview.jsx';
import Alert from './components/shared/Alert.jsx';
import RenderComponent from './components/related-items-comparison/RelatedItem.jsx';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: '19093',
      alert: {
        message: '',
        type: '',
      },
    };
    this.setAlert = this.setAlert.bind(this);
  }

  setAlert(message, type) {
    this.setState({
      ...this.state,
      alert: {
        message,
        type,
      },
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        alert: {},
      });
    }, 2000);
  }

  render() {
    const { alert: { message, type }, productId } = this.state;
    return (
<<<<<<< HEAD
      <div>
        <h1>This will be the front end!</h1>
      <ProductQuestionManager productId={19093} />
=======
      <div className="container">
        {
          alert
            && <Alert message={message} type={type} />
        }
        <ProductOverview
          setAlert={this.setAlert}
          productId={productId}
        />
>>>>>>> ce7c1bb110e77feeac67cdaaa00b4d163885af09
      </div>
    );
  }
}

export default App;
