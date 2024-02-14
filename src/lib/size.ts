const UNIT = 4;
export default class Size {
  // row height
  rowh(scale: number = 0) {
    switch (scale) {
      case 0:
      case 1:
      case 2:
        return UNIT * (scale + 8);
      default:
        return UNIT * 8;
    }
  }

  colw(scale: number = 0) {
    switch (scale) {
      case 0:
      case 1:
      case 2:
        return UNIT * (scale + 8);
      default:
        return UNIT * 8;
    }
  }

  gap(scale: number = 0) {
    switch (scale) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        return UNIT * (scale + 2);
      default:
        return UNIT;
    }
  }

  // vertical gap
  vgap(scale: number = 0) {
    switch (scale) {
      case 0:
        return 8;
      case 1:
      case 2:
      case 3:
        return UNIT * (scale + 4);

      default:
        return UNIT;
    }
  }

  // horizontal gap
  hgap(scale: number = 0) {
    switch (scale) {
      case 0:
        return 8;
      case 1:
      case 2:
        return UNIT * (scale + 2);
      default:
        return UNIT;
    }
  }

  //border-radius
  round(scale: number = 0) {
    switch (scale) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        return UNIT * (scale + 2);
      default:
        return UNIT;
    }
  }
}
