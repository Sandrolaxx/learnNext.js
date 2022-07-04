export default function handler(req, res) {
    const studentId = Number.parseInt(req.query.id ?? 0);
    
    res.status(200)
        .json({
            studentId, 
            name: "Clébim da Silva",
            email: "clebim123@gmail" 
        });
  }
  