import React, {Component} from 'react';
import Date1 from './Date';
import "./Input.less";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state={
          content:{
            title:'',
            main:'',
          }
        }
    }
    render() {
        const {release}=this.props;
        return (
            <div className="container">
               <label className="title">
                   标题:&nbsp;&nbsp;<input type="text" placeholder="请输入标题"/>
               </label>
                <label className="content">
                   内容:&nbsp;&nbsp;<textarea placeholder="请输入内容"/>
               </label>
               <button onClick={release}>发布</button>
               <Date1/>
            </div>
            )
    }
}
export default Input;
