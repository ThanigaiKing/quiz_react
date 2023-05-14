import { legacy_createStore as createStore} from 'redux'
import { scoreReducer } from '../reducers/scoreReducer';

const store = createStore(scoreReducer);

export default store;