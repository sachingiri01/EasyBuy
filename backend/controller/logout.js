const logout = async (req, res) => {
    try { 
        res.clearCookie('token');

        res.json({
            message: 'Logout successfully',
            Success: true
        });
    } catch (err) {
        res.status(500).json({
            error: err.message || 'Some error occurred',
            message: "Cannot logout, some error occurred",
            Success: false
        });
    }
};

module.exports = logout;
