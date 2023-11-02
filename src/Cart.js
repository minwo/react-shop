import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, msCount } from './store';

function Cart(){
	let state = useSelector(state => state.cart)

  let dispatch = useDispatch();

	return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
      {
        state.map(( a, idx ) => 
          <tr key={ idx }>
            <td>{ state[idx].id }</td>
            <td>{ state[idx].name }</td>
            <td>{ state[idx].count }</td>
            <td>
              <button className='btn-plus' onClick={() => dispatch(addCount(idx))}>+</button>
              <button className='btn-ms' onClick={() => dispatch(msCount(idx))}>-</button>
            </td>
          </tr>
        )
      }
      </tbody>
    </Table>
  );
}

export default Cart;