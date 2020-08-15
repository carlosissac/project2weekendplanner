const Joi = require('joi');

const UserJoiSchema = function() {
    this.ID = 'UserJoiSchema';
};

UserJoiSchema.prototype.getID = function() {
    return this.type;
};

UserJoiSchema.prototype.getSingleUserMethod = function() {
    const schema = {
        UserID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

UserJoiSchema.prototype.getUserEmailMethod = function() {
    const schema = {
        UserEmail: Joi.string().email().required()
    };
    return schema;
};

UserJoiSchema.prototype.postUserMethod = function() {
    const schema = {
        UserName: Joi.string().required(),
        UserEmail: Joi.string().email().required(),
        UserNickname: Joi.string().required()
    };
    return schema;
};

UserJoiSchema.prototype.putUserMethod = function() {
    const schema = {
        UserID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

UserJoiSchema.prototype.deleteUserMethod = function() {
    const schema = {
        UserID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

module.exports = { UserJoiSchema };