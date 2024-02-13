enum SCREENS {
  SPLASH = "#SPLASH",
  TABLE_VIEW = "#TABLE_VIEW"
}

enum ASYNC_KEYS {
  ACCESS_TOKEN = '@ACCESS_TOKEN',
  USER_ID = "@USER_ID",
  USER_NAME = "@USER_NAME",
  USER_DATA = "@USER_DATA",
}

enum ALERT_TYPES {
  SUCCESS = 'success',
  WARNING = "warning",
  DANGER = "danger",
  INFO = "info"
}
enum ALERT_HEADER {
  SUCCESS = 'SUCCESS!',
  WARNING = "WARNING!",
  DANGER = "ERROR!",
  INFO = "INFO"
}

enum LAYOUTS {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY"
}

enum TOOLS {
  RESIZE = 'RESIZE',
  COLOR = 'COLOR',
  LINK = 'LINK',
  TEXT = 'TEXT',
  ADD_URL = 'ADD_URL',
  CAMERA = 'CAMERA',
}

export {
  SCREENS,
  ASYNC_KEYS,
  ALERT_TYPES,
  ALERT_HEADER,
  LAYOUTS,
  TOOLS
}