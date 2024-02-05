import palette from "../palette";
import Font from "./font";

export enum Direction {
  TOP = 1,
  RIGHT = 1 << 1,
  BOTTOM = 1 << 2,
  LEFT = 1 << 3,

  VERTICAL = 1 | (1 << 2),
  HORIZONTAL = (1 << 1) | (1 << 3),
  ALL = 1 | (1 << 1) | (1 << 2) | (1 << 3),
}

const append = function (src, des) {
  for (const key in src) {
    if (src.hasOwnProperty(key)) {
      des[key] = src[key];
    }
  }
};

const Spec = function () {};

Spec.prototype.add = function (p: any) {
  append(p, this);
  return this;
};

Spec.prototype.block = function (w, h) {
  return this.add({
    width: w,
    height: h,
  });
};

Spec.prototype.addCircle = function (n) {
  return this.add({
    borderRadius: n,
  });
};

Spec.prototype.span = function (n) {
  if (n == undefined) return this;
  return this.add({
    flex: n,
  });
};

Spec.prototype.fill = function (bx = false, by = false) {
  bx && this.add({ width: "100%" });
  by && this.add({ height: "100%" });

  return this;
};

Spec.prototype.port = function () {
  return this.add({
    flexDirection: "row",
  });
};

Spec.prototype.vert = function () {
  return this.add({
    flexDirection: "column",
  });
};

Spec.prototype.align = function (x, y) {
  x && this.add({ justifyContent: x });
  y && this.add({ alignItems: y });
  return this;
};

Spec.prototype.edge = function (
  n: number,
  d: number = Direction.ALL,
  c: string = palette.BLACK
) {
  if (d & Direction.TOP) {
    this.add({ borderTopWidth: n });
  }

  if (d & Direction.RIGHT) {
    this.add({ borderRightWidth: n });
  }

  if (d & Direction.BOTTOM) {
    this.add({ borderBottomWidth: n });
  }

  if (d & Direction.LEFT) {
    this.add({ borderLeftWidth: n });
  }

  this.add({ borderColor: c });

  return this;
};

Spec.prototype.pad = function (n: number, d: number = Direction.ALL) {
  if (d == Direction.ALL) {
    this.add({ padding: n });
  } else if (d == Direction.HORIZONTAL) {
    this.add({ paddingHorizontal: n });
  } else if (d == Direction.VERTICAL) {
    this.add({ paddingVertical: n });
  } else {
    if (d & Direction.TOP) {
      this.add({ paddingTop: n });
    }

    if (d & Direction.RIGHT) {
      this.add({ paddingRight: n });
    }

    if (d & Direction.BOTTOM) {
      this.add({ paddingBottom: n });
    }

    if (d & Direction.LEFT) {
      this.add({ paddingLeft: n });
    }
  }

  return this;
};

Spec.prototype.margin = function (n: number, d: number = Direction.ALL) {
  if (d == Direction.ALL) {
    this.add({ margin: n });
  } else if (d == Direction.HORIZONTAL) {
    this.add({ marginHorizontal: n });
  } else if (d == Direction.VERTICAL) {
    this.add({ marginVertical: n });
  } else {
    if (d & Direction.TOP) {
      this.add({ marginTop: n });
    }

    if (d & Direction.RIGHT) {
      this.add({ marginRight: n });
    }

    if (d & Direction.BOTTOM) {
      this.add({ marginBottom: n });
    }

    if (d & Direction.LEFT) {
      this.add({ marginLeft: n });
    }
  }

  return this;
};

Spec.prototype.back = function (c = palette.WHITE) {
  return this.add({ backgroundColor: c });
};

Spec.prototype.gap = function (n: number | string = 12) {
  return this.add({ gap: n });
};

class Style {
  private static _instance: Style;
  public static get instance() {
    return this._instance || (this._instance = new Style());
  }

  shadow(w = 0, h = 1) {
    return {
      elevation: 10,
      shadowColor: palette.BLACK,
      shadowOffset: { width: w, height: h },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    };
  }

  get font() {
    return Font.instance;
  }

  get spec() {
    return new Spec();
  }
}

export default Style.instance;
