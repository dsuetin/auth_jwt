const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');
module.exports = function (req, res, next) {
    try {
        const authorizathionHeader = req.headers.authorization;

        console.log('req', req);
        console.log('authorizathionHeader', authorizathionHeader);
        if (!authorizathionHeader) {

            return next(ApiError.DontHaveAccessTokenError());    
        }
        const accessToken = authorizathionHeader.split(' ')[1];
        console.log('accessToken', accessToken);
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());    
        }
        const userData = tokenService.validateAccessToken(accessToken);

        console.log('userData', userData);
        if (!userData) {
            return next(ApiError.UnauthorizedError());    
        }
        req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};