export function test(app: {
  use: (pattern?: string, ...args: Function[]) => void
}) {
  app.use('/test', (req, res, next) => {
    res.json('ok')
  })
}
