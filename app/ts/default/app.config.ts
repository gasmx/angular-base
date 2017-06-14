function dir(path) {
  let PATHS = { BASE: 'app/ts' }

  return PATHS.BASE + path;
}

export { dir };