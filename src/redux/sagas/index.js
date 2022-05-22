import {spawn, all} from "redux-saga/effects";
 //take - указ. sagaMiddleware ждать выполнения указан. д-я(ждёт диспатч)
//takeEvery - take в цикле takeLatest-only last takeLeading-only first
//put - указ. middleware, что нужно отправить действие в store(задиспатчить экшн)
//call - для работы с acинхрон операциями - блокирующий  эффект
//fork, spawn - для обработки в асинхр режиме нескольких задач(неблокирующий  эффект)
// join - для остановки и ожидания вып-я в конкретном месте
//select - доступ store 
//call - вызов saga
//all - вызов массива саг
//spawn - распределённый запуск саг
//delay - ожидание, отсрочка
//cancel - отмена запроса
//actionChannel - oбработка запросов в определённой последовательности
//effects - это вспом. ф-ции кот созд простые объекты(содерж. инструкции, кот. вып. sagaMiddleware)
import peopleSaga from "./people";

export default function* rootSaga() {
  const sagas = [peopleSaga];

  yield all(sagas.map(s => spawn(s))); //spawn -распределённый запуск саг
}
//rootSaga запускает все watcher



//1 Вариант одиночный клик
// export function* fetchPlanets() {
//   const response = yield call(fetch, 'https://swapi.dev/api/planets')
//     const data = yield call([response, response.json]);
//     console.log("data-after-btn", data);
//   }

// export function* loadOnAction() {  //по клику обычно использ. take + fork
//   while(true) {
//     yield take('LOAD_SOME_DATA'); //takeLatest - сраб только последний запрос
//     yield fork(fetchPlanets); //fork не блок. и сраб на каждый клик
//   }
// }

//2 Вариант (много кликов на запрос)
// export function* fetchPlanets(signal) { //c отменой запросов если много кликов
//   const response = yield call(
//     fetch,
//     'https://swapi.dev/api/planets',
//      {signal}
//      );
//     const data = yield call([response, response.json]);
//     console.log("data-after-btn", data);
//   }

// export function* loadOnAction() { //c отменой запросов если много кликов
//   let task;
//   let abortController = new AbortController();

//   while(true) {
//     yield take('LOAD_SOME_DATA');
//     if(task) {
//       abortController.abort(); //прерывание отмена
//       yield cancel(task); //отмена
//       abortController = new AbortController();
//     }
//     task = yield fork(fetchPlanets, abortController.signal); //fork не блок. и сраб на каждый клик
//   }
// }

//3й Вариант несколько последоват запросов
// export function* fetchPlanets() {
//   const response = yield call(fetch, 'https://swapi.dev/api/planets')
//     const data = yield call([response, response.json]);
//     console.log("data-after-btn", data);
//   }

// export function* loadOnAction() {  //по клику обычно использ. take + fork
//   const channel = yield actionChannel('LOAD_SOME_DATA')
//   while(true) {
//     yield take(channel); //actionChannel - собир в буфер а потом обраб все запросы по порядку
//     yield call(fetchPlanets);
//   }
// }

//Общая Saga
// export default function* rootSaga() { //наиболее предпочтитеоьный вариант-все саги изолированы друг от друга
//   const sagas = [loadBasicData,
//                  pageLoaderSaga,
//                  loadOnAction
//   ];
//   const retrySagas = sagas.map(saga => {
//     return spawn(function* (){  //можно и не spawn(блокир и не блокир эффект)
//       while(true) {
//         try {
//           yield call(saga);
//           break;
//         } catch (e) {
//             console.log(e) //eсли в конкретной саге будет ошибка, то цикл перейдёт к новой саге
//         }
//       }
//     })
//   });

 // yield all(retrySagas) //all вызовет все саги
// const task = yield retrySagas[0];// выполнили первую сагу
// yield call(task);
//}
