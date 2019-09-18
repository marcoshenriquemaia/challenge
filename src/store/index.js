// Store é um repositório onde vou ter acesso a todas as informações necessárias para imprimi-las na tela.
// O state está sendo setado através da "api" RequestJson

class Store {
  state = {};
  // returna o obejeto state para tratarmos em outros locais
  getState() {
    return { ...this.state };
  }
  // não está sendo utilizado neste desafio, mas é estremamente últil quando quer fazer alterações
  // em alguns obejos.
  setState(value) {
    this.state = value;
  }
  //retorna os preços já somados dos produtos
  getTotalPrice () {
    const values = this.state.cart.item.map(item => item.bestPrice);
    const sum = values.reduce((acumulator, correntValue) =>{
      return acumulator + correntValue;
    })
    return sum;
  }
}
const store = new Store();

export default store;
