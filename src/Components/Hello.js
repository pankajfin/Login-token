import React,{ Component,} from 'react'
//mport {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {detailFetch} from '../actions'

class Hello extends Component {
    state ={
        token :null
    }
    componentDidMount() {
        const data =this.props.location.state.data
        console.log("data",data)
        const token = this.props.location.state.header["x-auth-token"]
        this.setState({token : token})
        localStorage.setItem(this.props.location.state.data.user_email, JSON.stringify(token))

    }

    clearLocalStorage (){
        localStorage.removeItem(this.props.location.state.data.user_email);
    }

    onClickHandler(){

        const tok =localStorage.getItem(this.props.location.state.data.user_email)
        const abc = JSON.parse(tok)
        // const AuthStr = 'Bearer '.concat(tok);
        this.props.detailFetch(abc)
        
        // if(tok){

        //     this.props.history.push("/second",this.props.location.state.data.user_email)
        // }
        // else{
        //     alert("Please login",
        //     this.props.history.push("/"))
        // }
}


    render(){
    const prop =this.props.location.state
    const t = localStorage.getItem(prop.data.user_email)
    if(t)
    {
        console.log("token",t)
    }
        return (
        <div>
          Welcome {prop.data.user_email}
          <div>
         
          <button 
          className="btn btn-danger"
          onClick={this.clearLocalStorage.bind(this)}>
          DESTROY LOCAL STORAGE
          </button>
          <button onClick={()=>this.onClickHandler()}>SECOND</button>          
          </div>
        </div>
    )
}
}
function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps,{detailFetch})(Hello)