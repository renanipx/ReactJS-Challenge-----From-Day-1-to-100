import React, { Component } from 'react';

class Contador extends Component {
  // Constructor: Inicializa o estado e faz o binding de métodos
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    console.log('constructor: Componente foi criado');
  }

  // getDerivedStateFromProps: Atualiza o estado com base nas novas props (neste caso, não será usado, mas pode ser útil)
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps: Atualizando estado com base nas props', nextProps);
    return null; // Não há alteração no estado baseado nas props
  }

  // render: Responsável por renderizar o JSX
  render() {
    console.log('render: Componente sendo renderizado');
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }

  // componentDidMount: Chama o método após o componente ser montado
  componentDidMount() {
    console.log('componentDidMount: Componente foi montado');
  }

  // shouldComponentUpdate: Impede re-renderizações desnecessárias (aqui, vamos permitir sempre)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Componente precisa ser re-renderizado?', nextState.contador !== this.state.contador);
    return true; // Sempre permite a atualização
  }

  // getSnapshotBeforeUpdate: Captura o estado antes da atualização do DOM (por exemplo, a posição de rolagem)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capturando informações antes da atualização');
    if (prevState.contador !== this.state.contador) {
      return { scrollY: window.scrollY }; // Captura a posição de rolagem
    }
    return null;
  }

  // componentDidUpdate: Chamado após a atualização do componente
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Componente foi atualizado');
    if (snapshot) {
      console.log('Posição de rolagem antes da atualização:', snapshot.scrollY);
    }
  }

  // componentWillUnmount: Chamado antes do componente ser removido
  componentWillUnmount() {
    console.log('componentWillUnmount: Componente será desmontado');
  }

  // Métodos para atualizar o estado (incrementar e decrementar)
  incrementar = () => {
    this.setState((prevState) => ({ contador: prevState.contador + 1 }));
  };

  decrementar = () => {
    this.setState((prevState) => ({ contador: prevState.contador - 1 }));
  };
}

export default Contador;
