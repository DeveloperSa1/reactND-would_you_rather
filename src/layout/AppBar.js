// import React, {Fragment} from 'react'
// import {Link} from 'react-router-dom';
// // import {connect} from 'react-redux';
// // import {logout} from '../../actions/auth';
// import PropTypes from 'prop-types';

// export const NotNavBar = ({ auth : {isAuthenticated,loading},logout }) => {
//   const authLinks = (
//     <ul>
//       <li><Link to="/profiles">
//       المبرمجين
//       </Link></li>
//       <li><Link to="/posts">
//       المواضيع
//       </Link></li>
//       <li><Link to="/dashboard">
      
//       <span className="hide-sm"> لوحه التحكم</span> <i className="fa fa-user"></i>{ ` `} </Link></li>

//         <li>
//           <a onClick={logout} href="#!"><span className="hide-sm" onClick={logout}> تسجيل الخروج </span>  { ` `}  <i className="fa fa-sign-out"></i> </a>
          
        
//         </li>
        
//       </ul>
//   ); 
//   const guestLinks = (
//   <ul>
//      <li><Link to="/profiles">
//      المبرمجين
//       </Link></li>
//     <li><Link to="/register">التسجيل</Link></li>
//     <li><Link to="/login">تسجيل الدخول</Link></li>
//   </ul>);
//     return (
       
//      <nav className="navbar bg-dark ltr">
//       <h1>
//         <Link to="/"> حـزب المبرمجين <i className="fa fa-code"></i> </Link>
//       </h1>

//     { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
//     </nav> 
     
//     )
// }

// NavBar.propTypes = {
//   logout : PropTypes.func.isRequired,
//   auth : PropTypes.object.isRequired,
// }


// const mapStateToProps = state => ({
//   auth : state.auth
// })

// // export default connect(mapStateToProps,{logout}) (NavBar);
