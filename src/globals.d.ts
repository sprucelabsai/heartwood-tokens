declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

/**
 * Token
 */
declare type TokenValue = string | number

interface Token {
  value: TokenValue,
  original: {
    value: TokenValue,
    comment?: string
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

/**
 * Value Formatting
 */
declare type SizeUnit = string