// Vercel serverless function wrapping json-server
// NOTE: Data is stored in-memory and resets on each cold start.
// For persistent storage, connect a real database (MongoDB, PlanetScale, etc.)

const jsonServer = require('json-server')

// Inline initial data (copied from db.json at deploy time)
const initialData = {
  books: [
    {
      id: "1",
      title: "상록수",
      description: "이야기를 9기의 수강생이 이전의 과정에서 살습자료로 발표한 '상록수'의 내용을 표지에 담고 싶어.",
      coverImageUrl: null,
      createdAt: "2026-04-24T00:00:00.000Z",
      updatedAt: "2026-05-13T00:00:00.000Z"
    }
  ]
}

const app  = jsonServer.create()
const router = jsonServer.router(initialData)
const middlewares = jsonServer.defaults({ noCors: false })

// Strip /api prefix forwarded by Vercel rewrite
app.use((req, _res, next) => {
  req.url = req.url.replace(/^\/api/, '') || '/'
  next()
})

app.use(middlewares)
app.use(router)

module.exports = app
