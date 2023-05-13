import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className=''>
            <Link to='/'>Home--</Link>
          <Link to='/login'>Login--</Link>
          <Link to='/register'>Register--</Link>
          <Link to='/sell'>SellHere--</Link>
          <Link to='/postProduct'>AddProduct--</Link>
          <Link to='/filterByName'>FilterName--</Link>
          <Link to='/filterByDate'>FilterDate--</Link>
          <Link to='/update'>UpdateProducts--</Link>
          <Link className='blog-container btn-lout' onClick={handleLogOut}>LogOut</Link>
        </div>
    );
};

export default Header;