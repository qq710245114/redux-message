import React, {Component} from 'react';

class Date1 extends Component {
    constructor(props) {
        super(props);
        this.state={
          time:"",
          timer:null
        }
        this.showDate=this.showDate.bind(this);
    }
    componentDidMount() {
      this.showDate();
       this.state.timer=setInterval(this.showDate,1000);

    }
    componentWillUnmount() {
       clearInterval(this.state.timer);

    }
    showDate() {
      let date=new Date();
      let dateArray=[date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()]
      this.setState({time: dateArray.join('-')});
    }

    render() {
        return (
            <div className="container">
               <p>现在时间是：{this.state.time}</p>
            </div>
            )
    }
}
export default Date1;
