import { STORAGE_KEY } from '../const/storage';

class Storage {
  #storage = localStorage;

  add(item) {
    const data = this.get();
    this.set([...data, item]);
  }

  get() {
    const data = JSON.parse(this.#storage.getItem(STORAGE_KEY));
    return data ?? [];
  }

  set(value) {
    this.#storage.setItem(STORAGE_KEY, JSON.stringify(value));
  }
}

export default new Storage();
