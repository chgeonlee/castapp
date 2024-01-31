class Size {
  readonly DEFAULT_GAP_SIZE = 3;
  readonly DEFAULT_LEN_SIZE = 4;
  readonly DEFAULT_COL_SIZE = 12;

  gap(scale) {
    return 4 + this.DEFAULT_GAP_SIZE * scale;
  }

  length(scale) {
    return 8 + this.DEFAULT_LEN_SIZE * scale;
  }

  col(scale) {
    return this.DEFAULT_COL_SIZE + this.DEFAULT_COL_SIZE * scale;
  }
}

export default new Size();
