// aud
// :
// "422977532705-oj9md6rb2f9ve2t3s87n1ktm29v5piki.apps.googleusercontent.com"
// azp
// :
// "422977532705-oj9md6rb2f9ve2t3s87n1ktm29v5piki.apps.googleusercontent.com"
// email
// :
// "hes.behboudi@gmail.com"
// email_verified
// :
// true
// exp
// :
// 1710147117
// family_name
// :
// "Behboudi"
// given_name
// :
// "Hesam"
// iat
// :
// 1710143517
// iss
// :
// "https://accounts.google.com"
// jti
// :
// "305f5434ec70b42874e50b7b469d328914f5e58a"
// locale
// :
// "en-GB"
// name
// :
// "Hesam Behboudi"
// nbf
// :
// 1710143217
// picture
// :
// "https://lh3.googleusercontent.com/a/ACg8ocLwaJlOxuXbKXzpe1PcChHduOJLwrAzX7lCrqcybDsT=s96-c"
// sub
// :
// "112520161716386179749"

function parseJwt (token) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

export function getUserGoogle (token) {
  const userObject = parseJwt(token)
  const { email, given_name: userName } = userObject
  return { email, userName };
}
