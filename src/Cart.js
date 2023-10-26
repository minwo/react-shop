import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, msCount } from './store';

function Cart(){
	let state = useSelector((state) => {
		return state
	})

  let dispatch = useDispatch();
	console.log(state);

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
			state.cart.map(( a, idx ) => 
				<tr key={ idx }>
					<td>{ state.cart[idx].id }</td>
					<td>{ state.cart[idx].name }</td>
					<td>{ state.cart[idx].count }</td>
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