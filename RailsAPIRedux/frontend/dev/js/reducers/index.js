import {combineReducers} from 'redux';
import ArticlesReducer from './articles_reducer';
import {reducer as formReducer} from 'redux-form';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    articles: ArticlesReducer,
    form: formReducer
});

export default allReducers
