class Size {
  readonly DEFAULT_GAP_SIZE = 4;
  readonly DEFAULT_LEN_SIZE = 8;
  readonly DEFAULT_COL_SIZE = 12;

  gap(scale) {
    return this.DEFAULT_GAP_SIZE * scale;
  }

  length(scale) {
    return 12 + this.DEFAULT_LEN_SIZE * scale;
  }

  col(scale) {
    return this.DEFAULT_COL_SIZE * scale;
  }
}

export default new Size();
