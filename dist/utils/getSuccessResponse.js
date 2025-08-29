"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuccessRes = void 0;
const getSuccessRes = (data, statusCode = 200) => {
    return {
        statusCode,
        message: 'success',
        data,
    };
};
exports.getSuccessRes = getSuccessRes;
//# sourceMappingURL=getSuccessResponse.js.map