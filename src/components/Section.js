export class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  setItem(element) {
    this._container.prepend(element);
  }

  addItem(elements) {
    elements.forEach((item) => {
      this._renderer(item);
    });
  }
}