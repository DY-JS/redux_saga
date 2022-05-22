import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {LOAD_USERS} from '../redux/reducers/people/actions';
import { selectPeople } from '../redux/reducers/people/selectors';
import PeoplePagination from './PeoplePagination';
import Form from './Form';

function PeopleTable() {
    const people = useSelector(selectPeople);
    const dispatch = useDispatch();

    const changePage = newPage => dispatch({
      type: LOAD_USERS,
      payload: {
        page: newPage,
        search: people.search
      }
    });

    const search = (v) => dispatch({
      type: LOAD_USERS,
      payload: {
        page: 1,
        search: v
      },
    });
    
    console.log(people);
    
    useEffect(() => {
      dispatch({type:LOAD_USERS, payload: {page:1, search: ''}});
    }, [dispatch]);
    
      if(people.loading) {
        return <h1>Loading...</h1>
      }
      return (
        <div style={{width: "max-content", margin: "0 auto"}}>
        <h1 style={{margin: "0 auto"}}>
          Star Wars Characters
        <Form search={search} query={people.search}/>
        </h1>
        <table
          border={1}
          // width='90%'
          cellPadding={5}
          cellSpacing={0}
          >
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth year</th>
              <th>Eye color</th>
              <th>Gnder</th>
              <th>Height</th>
              <th>See Details</th>
            </tr>
          </thead>
          <tbody>
            {people?.data?.results.map(character => {
             const id =character.url.slice(25).replaceAll(/\D/g,''); //из url оставил только число -заменил все нечисловые эл-ты на '' начиная с 25го символа
              console.log(id);
              return (
                <tr key={character.name}>
                  <td>{character.name}</td>
                  <td>{character.birth_year}</td>
                  <td>{character.eye_color}</td>
                  <td>{character.gender}</td>
                  <td>{character.height}</td>
                  <td>
                    <Link to={`/people/${id}`}>
                      Details
                    </Link>
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <PeoplePagination
           page={people.page}
           total={people?.data?.count}
           onChange={changePage}
           />
        </div>
      );
    }
    
    export default PeopleTable;