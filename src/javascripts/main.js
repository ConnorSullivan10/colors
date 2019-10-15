import 'bootstrap';
import cardList from './components/cardList/cardList';
// import arrayMethods from './arrayMethods';
import '../styles/main.scss';

const init = () => {
  // arrayMethods.init();
  cardList.cardListBuilder();
};

init();
