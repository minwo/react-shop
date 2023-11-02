import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCount, msCount, addItem } from './store';
import { useState, useEffect } from 'react';

function Cart(){
	let state = useSelector(state => state.cart)
  let [cartId, setCartId] = useState();
  let [cartName, setCartName] = useState();
  let [cartCount, setCartCount] = useState();

  let dispatch = useDispatch();

  useEffect(() => {
    console.log(cartId,cartName,cartCount);
    if (cartId && cartName && cartCount) {
      dispatch(addItem({id : cartId, name : cartName, count : cartCount}))
    }
  }, [cartId, cartName, cartCount]);

  const setFn = () => {
    
    setCartId(document.querySelector('#cartId').value);
    setCartName(document.querySelector('#cartName').value);
    setCartCount(document.querySelector('#cartCount').value);
    console.log(cartId,cartName,cartCount);
  }

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
        <div className="input-group">
          <input type="text" id="cartId" />
          <input type="text" id="cartName" />
          <input type="text" id="cartCount" />
        </div>
        <button onClick={() => {setFn()}
        }>상품추가</button>
      </div>
    </>
  );
}

export default Cart;