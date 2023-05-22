const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Récupérer le token de l'en-tête de la requête
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // Vérifier si le token existe
  if (!token) {
    return res.status(401).json({ message: 'Token manquant. Accès non autorisé.' });
  }
};

module.exports = authMiddleware;
