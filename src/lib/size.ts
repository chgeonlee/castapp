export default class Size {
  // row height
  rowh(scale: number = 0) {
    const unit = 8;
    switch (scale) {
      case 0:
      case 1:
      case 2:
        return unit * (scale + 4);
      default:
        return unit * 4;
    }
  }

  colw(scale: number = 0) {
    const unit = 8;
    switch (scale) {
      case 0:
      case 1:
      case 2:
        return unit * (scale + 4);
      default:
        return unit * 4;
    }
  }

  gap(scale: number = 0) {
    const unit = 8;
    switch (scale) {
      case 0:
      case 1:
      case 2:
        return unit * (scale + 1);
      default:
        return unit;
    }
  }

  // vertical gap
  vgap(scale: number = 0) {
    const unit = 10;
    switch (scale) {
      case 0:
      case 1:
      case 2:
        return unit * (scale + 1);
      default:
        return unit;
    }
  }

  // horizontal gap
  hgap(scale: number = 0) {
    const unit = 14;
    switch (scale) {
      case 0:
      case 1:
      case 2:
        return unit * (scale + 1);
      default:
        return unit;
    }
  }

  //border-radius
  round(scale: number = 0) {
    const unit = 4;
    switch (scale) {
      case 0:
      case 1:
      case 2:
        return unit * (scale + 1);
      default:
        return unit;
    }
  }
}
