import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, msCount, addItem } from './store';

function Cart(){
	let state = useSelector(state => state.cart)

  let dispatch = useDispatch();

	return (
    <>
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
      <div>
        <button onClick={() =>
          dispatch(addItem({id : 1, name : 'minwoo', count : 1}))
        }>상품추가</button>
      </div>
    </>
  );
}

export default Cart;