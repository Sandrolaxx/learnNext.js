// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function sayHi(req, res) {
  res.status(200)
    .json({ metodo: req.method });
}