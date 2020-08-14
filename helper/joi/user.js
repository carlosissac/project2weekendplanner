const Joi = require('joi');

const UserJoiSchema = function() {
    this.ID = 'UserJoiSchema';
};

UserJoiSchema.prototype.getID = function() {
    return this.type;
};

UserJoiSchema.prototype.getSingleMethod = function() {
    const schema = {
        UserID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

UserJoiSchema.prototype.postMethod = function() {
    const schema = {
        UserName: Joi.string().required(),
        UserEmail:  Joi.string().email().required(),
        UserNickname: Joi.string().required()
    };
    return schema;
};

UserJoiSchema.prototype.putMethod = function() {
    const schema = {
        UserID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

UserJoiSchema.prototype.deleteMethod = function() {
    const schema = {
        UserID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

module.exports = { UserJoiSchema };