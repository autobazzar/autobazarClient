export function prettyString (message) {
  if (typeof message == 'string') {
    return message
  } else return message.join('\n')
}
