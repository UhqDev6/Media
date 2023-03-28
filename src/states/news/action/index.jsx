import { ActionType } from '@/constants/actiontype/';

const receiveNewsActionCreator = (news) => ({
  type: ActionType.RECEIVE_NEWS,
  payload: {
    news,
  },
});

// const asyncNews = () => async (dispatch) => {
//   try {
//     receiveNewsActionCreator(dispatch);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

export {
  receiveNewsActionCreator,
};
