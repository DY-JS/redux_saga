import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { LOAD_USER_DETAILS } from "../redux/reducers/pepleDetails/actions";

export default function Details() {
  const location = useLocation();
  const dispatch = useDispatch();
  const person = useSelector((state) => state.peopleDetails);
  const id = location.pathname.slice(location.pathname.length - 1);

  useEffect(() => {
    dispatch({
      type: LOAD_USER_DETAILS,
      payload: { id },
    });
  }, []);

  if (person.loading) {
      return <h1>Loading...</h1>
  }

  return (
    <div style={{ width: "max-content", margin: "0 auto" }}>
      <h1 style={{ margin: "0 auto" }}>{person?.data?.name}</h1>
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>Height</th>
            <th>Eye color</th>
            <th>Birth year</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {person.data &&
              [...Object.keys(person.data)].map((p) => {
                if (
                  p === "birth_year" ||
                  p === "eye_color" ||
                  p === "gender" ||
                  p === "height"
                ) {
                  return <th key={person.data[p]}>{person.data[p]}</th>;
                }
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
