

export const errorMiddleware = async (err, req, res, next) => {
    res.status(500).json({ error: err });
}