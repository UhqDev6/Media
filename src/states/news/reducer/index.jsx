import { ActionType } from '@/constants/actiontype/';

const newsReducer = (news = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_NEWS:
      return action.payload.news;
    default:
      return news;
  }
};

export default newsReducer;
