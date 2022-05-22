import { apply, call, put, take, takeEvery, select, fork, takeLatest } from "redux-saga/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { LOAD_USERS, LOAD_USERS_SUCCESS } from "../../reducers/people/actions";
import { LOAD_USER_DETAILS, LOAD_USER_DETAILS_SUCCESS, LOAD_USER_DETAILS_FAILURE } from "../../reducers/pepleDetails/actions";

export function* loadPeopleDetails({payload}) {
  const {id} = payload;
  try { 
    const request = yield call(
    //call-для асинхрон. вызовов
    fetch,
    `https://swapi.py4e.com/api/people/${id}`
  );
  const data = yield apply(request, request.json); //apply-для асинхрон. вызовов и преобраз в json тоже
  yield put({
    type: LOAD_USER_DETAILS_SUCCESS,
    payload: data,
  });//put-запис. данные в store согласно логике из reducer}
console.log(data);
} catch (error) {
  yield put({
    type: LOAD_USER_DETAILS_FAILURE,
    payload: error
  });
}
}

export function* loadPeopleList({ payload }) {
  const { page="", search="" } = payload;
  const request = yield call(
    //call-для асинхрон. вызовов
    fetch,
    `https://swapi.py4e.com/api/people?page=${page}&search=${search}`
  );
  const data = yield apply(request, request.json); //apply-для асинхрон. вызовов и преобраз в json тоже
  yield put({
    type: LOAD_USERS_SUCCESS,
    payload: data,
  });//put-запис. данные в store согласно логике из reducer
};

export default function* peopleSaga() {
  //watcher
  //yield fork(loadUsersOnRouteEnter);
  yield takeEvery(LOAD_USERS, loadPeopleList); //takeEvery-диспатчит экшн loadPeopleList в цикле
  yield takeEvery(LOAD_USER_DETAILS, loadPeopleDetails);
}

// export function* loadUsersOnRouteEnter() {  //сраб. при входе на страницу
//    while (true) {
//      const action = yield take(LOCATION_CHANGE);

//     if (action.payload.location.pathname === "/") {
//       const state = yield select((s) => s.people); //select-извлеч. данных из store
//       const { page, search } = state;

//       yield put({
//         type: LOAD_USERS,
//         payload: {
//           page,
//           search,
//         },
//       });
//     }
//   }
//   }
