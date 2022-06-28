export default function question(req, res) {
    if (req.method === "GET") {
        const id = req.query.id;

        res.status(200).json({
            id,
            enunciado: "Qual sua cor favorita?",
            respostas: [
                "Purple", "Yellow", "Green", "Blue"
            ]
        });
    } else {
        res.status(405).send();
    }
}