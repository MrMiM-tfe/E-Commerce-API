

exports.index = (req, res) => {
    res.status(404).json({err: "route not found"})
}