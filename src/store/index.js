class Store {
  state = {};
  getState() {
    return { ...this.state };
  }
  setState(value) {
    this.state = value;
  }
}
const store = new Store();

export default store;
