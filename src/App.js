import React,{Component} from "react";
import './App.css'
// import Inputref from "./Components/Inputref";
// import FocusInput from "./Components/FocusInput";
// import Greet from "./Components/Greet";
// import ClassCompo from "./Components/ClassCompo";
// import Hellow from "./Components/Hellow";
// import Greet from "./Components/Greet";
// import Message from "./Components/Message";
// import Counter from "./Components/Counter";
// import FunctionClick from "./Components/FunctionClick";
// import ParentComponent from "./Components/ParentComponent";
// import UserGretting from "./Components/UserGretting";
// import NameList from "./Components/NameList";
// import Stylesheet from "./Components/Stylesheet";
// import Form from "./Form";
// import Person from "./Components/Person";
// import Fragment from "./Components/Fragment";
// import Table from "./Components/Table";
// import PureComp from "./Components/PureComp";
// import Refsdemo from "./Components/Refsdemo";
// import FRinput from "./Components/FRinput";
// import Hero from "./Components/Hero";
// import ErrorBoundry from "./ErrorBoundry";
import Clickcounter from "./Components/Clickcounter";
import HouverCounter from "./Components/HouverCounter";
class App extends Component{
  render(){
    return(
      <div className="App">
        <Clickcounter/>
        <HouverCounter/>
        {/* <ErrorBoundry>
        <Hero heroName='Batman'/>
        <Hero heroName='Superman'/>
        <Hero heroName='joker'/>
        
        </ErrorBoundry> */}
        {/* <FRinput/> */}
        {/* <FocusInput/> */}
         {/* <Refsdemo/> */}
         {/* <PureComp/> */}
        {/* <Table/> */}
        {/* <Fragment/> */}
        {/* <Form/> */}
        {/* <Stylesheet primary={true }/> */}
        {/* <Person/> */}
        {/* <NameList/> */}
        {/* <UserGretting/> */}
        {/* <FunctionClick/> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name="Sunny" heroName="Badsha"><p>
        These Is Sunnys para It Shows How He Strong
        </p></Greet>
        <Greet name="SAHIl" heroName="Bobby">
          <button>Action</button></Greet>
        <Greet name="Omakr" heroName="?"/>
        <Greet name="   "/>

        <Hellow/> */}
     
            </div>
    );
  }
}
export default App;