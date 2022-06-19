export class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  setItem(element) {
    this._container.prepend(element);
  }

  addItem() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}