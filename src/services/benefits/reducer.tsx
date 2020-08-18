import { List, Record } from 'immutable';

import { 
  FETCH_ALL_BENEFITS_REQUESTED, 
  FETCH_ALL_BENEFITS_SUCCESS, 
  FETCH_ALL_BENEFITS_FAILURE,
  FILTER_BENEFITS_REQUESTED,
  FILTER_BENEFITS_SUCCESS,
  FILTER_BENEFITS_FAILURE
} from './constants';
import { IActionsBenefits, IBenefit, IBenefitsState, IBenefitsStateRecord } from './types';

export const getBenefitsStateRecord = (state: IBenefitsState): IBenefitsStateRecord => {
  class BenefitsStateRecord extends Record(state) implements IBenefitsStateRecord {}
  return new BenefitsStateRecord();
};

const initialState = getBenefitsStateRecord({
  benefits: List<IBenefit>(),
  currentPage: 1,
  totalPages: 1,
  searchQuery: '',
  status: 'pending',
  loading: true,
  error: '',
});

export default (state: IBenefitsStateRecord = initialState, action: IActionsBenefits): IBenefitsStateRecord => {
  switch (action.type) {
    case FILTER_BENEFITS_REQUESTED:
      return state.merge({'loading': true, ...action.payload});
    case FETCH_ALL_BENEFITS_REQUESTED:
      return state.set('loading', true);
    case FETCH_ALL_BENEFITS_SUCCESS:
    case FILTER_BENEFITS_SUCCESS:
      const { data, currentPage, totalPages, searchQuery } = action.payload?.data;
      console.log('data====', action.payload)
      const benefitList: IBenefit[] = data;
      return state.merge({
        'loading': false,
        'currentPage': parseInt(currentPage),
        'totalPages': parseInt(totalPages),
        'searchQuery': searchQuery,
        'benefits': List(benefitList)
      });
    case FETCH_ALL_BENEFITS_FAILURE:
    case FILTER_BENEFITS_FAILURE:
      return state.clear().set('loading', false).set('error', action.payload.error);
    default:
      return state;
  }
};