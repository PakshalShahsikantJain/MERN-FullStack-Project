import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function UserInfo() {
  const location = useLocation();
  const { data } = location.state;

  return (  
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>10/11/1999</td>
          <td>mark78@gmail.com</td>
          <td>password</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Tom</td>
          <td>11/11/2000</td>
          <td>tom1234@gmail.com</td>
          <td>xyzws</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>11/12/2001</td>
          <td>Larry456@gmail.com</td>
          <td>sadasdasdd</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>11/12/2001</td>
          <td>Larry456@gmail.com</td>
          <td>sadasdasdd</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Sejal</td>
          <td>24/10/2000</td>
          <td>seju456@gmail.com</td>
          <td>ghfghfghv</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Pakshal</td>
          <td>25/11/2001</td>
          <td>thechainsmokers78@gmail.com</td>
          <td>iopipon</td>
        </tr>
      </tbody>
    </Table>  
  );
}

export default UserInfo