import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store from '../redux/store';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='myApp__ContainerFlex'>
      <Provider store={store}>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
      </Provider>
    </div>
  );
};

export default MyApp
