module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, massege, errors = []) {
        super(massege);
        this.status = status;
        this.errors = errors;
    };

    static UnauthorizedError() {
        return new ApiError(401, 'Error: not authorized');
    };

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    };
};