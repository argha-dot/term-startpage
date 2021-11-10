interface errorCodesI {
  [index: string]: string
}

const errorCodes: errorCodesI = {
  "404": "command not found",
  "405": "file not found",
  "406": "usage: open <path>",
  "403": "not a link"
}

export { errorCodes };
