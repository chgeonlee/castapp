class Event {
  readonly SUCCESS_LOGIN = "successlogin";
  readonly SUCCESS_LOGOUT = "successlogout";

  readonly LOADED_PIN_DATA = "pindataloaded";
  readonly LOADED_POST_DATA = "postdataloaded";
  readonly LOADED_LOCATION_DATA = "locationdatafetched";
}

export default new Event();
