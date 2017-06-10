import { Injectable } from '@angular/core'

@Injectable()
class AppConfig {
  title: string = 'Angular 4 APP';
}

function dir(path) {
  let PATHS = { BASE: 'app/ts' }

  return PATHS.BASE + path;
}

export { AppConfig }
export { dir };