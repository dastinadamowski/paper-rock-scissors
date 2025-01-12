export default function handler(req, res) {
    if (req.method === 'POST') {
        // Get data from the request body
        const { playerChoice, computerChoice, outcome } = req.body;

        // Log the result to the console (or a database in the future)
        console.log(`Player chose ${playerChoice}, Computer chose ${computerChoice}, Outcome: ${outcome}`);

        // Respond with a success message
        res.status(200).json({ message: 'Result logged successfully!' });
    } else {
        // Handle unsupported HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
