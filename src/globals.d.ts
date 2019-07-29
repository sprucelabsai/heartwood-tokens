declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

/**
 * Token
 */
declare type TokenValue = string | number

interface Token {
  value: TokenValue,
  original: {
    value: TokenValue
  },
  name: string,
  attributes: {
    category: string,
    type?: string,
    item?: string,
    subitem?: string,
    state?: string
  },
  path: string[]
}

/**
 * Platforms
 */
declare type Platform = string