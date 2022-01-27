import React, { Component } from 'react';
import './App.scss';
import Aside from './components/ASide/ASide';
import Content from './components/Content/Content';
import API from './modules/API';
import UserPage from './components/UserPage/UserPage';

const api = new API();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      page: 'userList',
      id: 0,
      noEditUser: true
    }
    this.sortUsers = this.sortUsers.bind(this)
    this.renderUserFields = this.renderUserFields.bind(this)
    this.changePage = this.changePage.bind(this)
  }

  componentDidMount(){
    // api.getUserList()
    //   .then((users)=>{
    //     this.setState( () => {
    //       return {
    //         users
    //       }
    //     })
    //   })
    setTimeout( () => {
      api.getUserList()
      .then((users)=>{
        this.setState( () => {
          return {
            users
          }
        })
      })
    }, 200)
  }

  sortUsers(param){
    if (param === 'city'){
      this.setState(state => {
        return {
          users: state.users.sort( (a, b) => {
            return a.address.city > b.address.city ? 1 : -1
          })
        }
      })
    } else if (param === 'company'){
      this.setState(state => {
        return {
          users: state.users.sort( (a, b) => {
            return a.company.name > b.company.name ? 1 : -1
          })
        }
      })
    }
  }

  changePage(page, id){
    this.setState( () => {
      return {
        page,
        id
      }
    })
  }

  renderUserFields(id, readOnly){
    let user = this.state.users.find( (user) => user.id === id);
    let userObj = {
      'Name': user.name,
      'UserName': user.username,
      'E-mail': user.email,
      'Street': user.address.street,
      'City': user.address.city,
      'Zip Code': user.address.zipcode,
      'Phone': user.phone,
      'Website': user.website
    }
    // let userArr = [
    //   ['Name', user.name],
    //   ['UserName', user.username],
    //   ['E-mail', user.email],
    //   ['Street', user.address.street],
    //   ['City', user.address.city],
    //   ['Zip Code', user.address.zipcode],
    //   ['Phone', user.phone],
    //   ['Website', user.website]
    // ]
    return(
    <UserPage
      title="Профиль пользователя"
      fields={userObj}
      readOnly={readOnly}
      edit={()=>{this.setState(()=>{return {noEditUser: false}})}}
      id={id}
    />)
  }

  renderContent(){

    if(this.state.page === 'userList'){
      return (
        <Content 
          title="Список пользователей"
          users={this.state.users}
          info={"Найдено "+this.state.users.length+" пользователей"}
          changePage={this.changePage}
        /> )
    } else if (this.state.page === 'userFields') {
      return this.renderUserFields(this.state.id, this.state.noEditUser)
    }
    
  }

  render() {
    return (
      <div className="container">
        <Aside 
          sort={this.sortUsers}
        />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
