import { DeviceEventEmitter } from "react-native";

class Wire {
  private _map = {};

  fire = (e: string) => {
    DeviceEventEmitter.emit(e);
  };

  on = (e: string, f: (...args: any) => void) => {
    this._map[e] = (this._map[e] || 0) + 1;
    DeviceEventEmitter.addListener(e, f);
  };

  off = (e: string) => {
    delete this._map[e];
    DeviceEventEmitter.removeAllListeners(e);
  };

  clear() {
    Object.keys(this._map).map((nkey) => {
      delete this._map[nkey];
    });
  }

  monitoring() {
    Object.keys(this._map).map((nkey) => {
      console.log(nkey + ":" + this._map[nkey]);
    });
  }
}

export default new Wire();
