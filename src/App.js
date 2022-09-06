import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(URL)
      .then(({ data }) => {
        setList(data);
        setLoading(false);
      })
  }, []);
  return (
    <Container>
      {
        loading ?
          <span>Loading...</span>
        :
          <Table className="mt-5" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.website}</td>
                    </tr>      
                  )
                })
              }
            </tbody>
          </Table>
      }
    </Container>
  );
}

export default App;
