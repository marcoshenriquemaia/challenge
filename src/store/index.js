class Store {
  state = {};
  getState() {
    return { ...this.state };
  }
  setState(value) {
    this.state = value;
  }
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
