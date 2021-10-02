/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export function fetchData(action, state = {}) {
  if (action?.type === 'FETCH_DATA_SUCCESS') {
    return action.data;
  }
  return state;
}
