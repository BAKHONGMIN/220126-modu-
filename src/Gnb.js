import React,{Component} from "react";
import App from './App';

class Gnb extends Component{
    render(){
        return(
            <li>
            <a href={this.props.d1text.nmlink} className="d1">{this.props.d1text.nm}</a>
            <ul className="d2">
              {this.props.d1text.d2db.map((listcontent) =>
              {return <li><a href={listcontent.nmlink}>{listcontent.n1}</a></li>})}
            </ul>
          </li>
        )

    }



}
export default Gnb;