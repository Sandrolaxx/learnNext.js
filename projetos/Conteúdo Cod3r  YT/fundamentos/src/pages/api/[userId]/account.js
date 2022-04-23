export default function handler(req, res) {

    if (req.method === "GET") {
        getUserAccount(req, res);
    } else {
        res.status(405).send();
    }

}

function getUserAccount(req, res) {
    res.status(200).json({ 
        id: req.query.userId,
        name: `Sandrolax ${req.query.userId}`, 
        email:`sandrolax${req.query.userId}@hotmail.com`   
    })
}
   