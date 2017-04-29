import React from 'react';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      users: [],
      user: {}
    }
  }
  // componentDidMount(){
  //   // this.setState({userName: "yang"})
  //   axios.get('http://localhost:3000/users')
  //     .then( response => this.setState({users: response.data.users}) )
  // }
  handleClick(e){
    e.preventDefault();
    axios.get('http://localhost:3000/users/58c2698f5a3a8111032c06a6').then((response) => {
      this.setState({
        user: response.data.user
      });
    })
  }

  render(){
    // let userlest = this.state.users.map( (user,i) =>
    //       <div key={i}>
    //         username:
    //         {user.username}
    //       </div>
    //     )
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>
           clickme
        </button>
        <div>
          username:
          { this.state.user.username }
        </div>
      </div>
    )
  }
}
export default App;

// ### 服务器全局工具包，架设服务器：
//
// - npm  i -g http-server
// - 装包之后直接运行http-server . 即在当前文件夹下架设服务器，选择第一个端口或还是用默认的 localhost：8080 就可以在浏览器就可以访问。
// - 但注意：用 http-server 会产生浏览器缓存，在浏览器设置清理即可
