import ReactDOM from "react-dom";
import React from "react"
import RootComponent from './RootComponent'
import Parent from "./family/Parent";
import Alphabet from "./alphabet";
import Counter from "./counter/Counter";
import Lifecyle from "./lifecycle/Lifecycle";
import RemoteAPIData from "./remote/APIData";
import ParentForm from "./forms/parentForm";


var position = document.getElementById("rootelement")
ReactDOM.render(
<div> 
    <RootComponent> </RootComponent><RootComponent> </RootComponent>
    <hr></hr>
    <Parent sonname="kiku"  daughtername="piku"></Parent>
    <Parent sonname="rahul"  daughtername="radha"> sharma</Parent>
    <hr></hr>
   Passing CSS from index to alphabet
    <Alphabet fcolr="red">A</Alphabet>
    <Alphabet fcolr="pink">E</Alphabet>
    <Alphabet fcolr="yellow">I</Alphabet>
    <Alphabet fcolr="orange">O</Alphabet>
    <Alphabet fcolr="green">U</Alphabet>
    <hr></hr>
    <Counter></Counter>
    <hr></hr>

    </div>
,position)

ReactDOM.render(<Lifecyle></Lifecyle>,document.getElementById("life"))
ReactDOM.render(<RemoteAPIData></RemoteAPIData>,document.getElementById("remote"))
ReactDOM.render(<ParentForm></ParentForm>,document.getElementById("form"))