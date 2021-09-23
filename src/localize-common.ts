
export const parseObject = (text: string, parseObject: any) => {
  Object.keys(parseObject).reduce((a, b) => a.replace("{" + b + "}", parseObject[b]) ,text)
}
