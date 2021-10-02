/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {API_URL} from '../../Data';
import Axios from 'axios';

const success = 200;

export function FetchDataSuccess(questionData: any) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    questionData,
  };
}

export function FetchData() {
  return (dispatch: any) => {
    Axios.get(API_URL)
      .then((response: any) => {
        if (response.status === success) {
          dispatch(FetchDataSuccess(response.data));
        } else {
          console.log('Error fetching data');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
