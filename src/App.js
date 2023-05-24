import './App.scss'
import React,{ Component} from 'react'
import Display from './components/Display/Display'
import Panel from './components/Panel/Panel'
import operaciones from './logic/operaciones'

class App extends Component {

    state = {
        total: null,
        siguiente: '0',
        operador: null,
        seleccion: false
    }

    handleClick = nombreDeBoton => this.setState(operaciones(this.state,nombreDeBoton))

    componentDidUpdate(){
        console.log(this.state.total,this.state.siguiente,this.state.operador,this.state.seleccion)
    }

    render(){
        return (
            <div className="App">
                <Display value={this.state.siguiente || this.state.total || "0"}/>
                <Panel clickHandle={this.handleClick}/>
            </div>
        )
    }
}

export default App