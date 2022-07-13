export default function (req, res, next) {
  const host = req.headers.host
  const url = req.url
  const forceDomain = process.env.baseURL;
  // const forceDomain = 'https://heathrow.demodesigntemplates.com'
  // if (host.includes(`www`)) {
  //   res.writeHead(301, { Location: forceDomain + url })
  //   return res.end()
  // }
  return next()
}
