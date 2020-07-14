import React from 'react';
import HomePage from './Pages/Homepage/homepage.component';
import './App.css';
import ShopPage from './Components/shop/shop';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Components/header/header';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './Pages/Checkout/checkout';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import 'firebase/auth';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/user-actions'

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
         setCurrentUser({
          is:snapShot.id,
          ...snapShot.data()

          });
        });
      }

      setCurrentUser(userAuth)
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/checkout' component={CheckoutPage} />
    <Route exact path='/signin' 
    render= {() => this.props.currentUser ? 
          (<Redirect to='/' />) 
          : (<SignInAndSignUpPage />)
        } 
        />
    </Switch>
          </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //calling action while passing user in to invoke setCurrentUser with user used as payload
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
