import theme from '../defaultTheme'

function getValueFromPath(obj, path) {
  if (!obj) return null

  const paths = path.split('.')
  let acc = { ...obj }
  for (let i = 0; i < paths.length; i++) {
    const prop = paths[i]
    if (Object.prototype.hasOwnProperty.call(acc, prop)) {
      acc = acc[prop]
    }
    break
  }
  return acc
}

function themeGet(path, fallback) {
  const value = getValueFromPath(theme, path)
  return typeof value === 'string' ? value : fallback
}

export default themeGet
