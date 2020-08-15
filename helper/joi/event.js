const Joi = require('joi');

const EventJoiSchema = function() {
    this.ID = 'EventJoiSchema';
};

EventJoiSchema.prototype.getID = function() {
    return this.type;
};

EventJoiSchema.prototype.getSingleMethod = function() {
    const schema = {
        EventID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

EventJoiSchema.prototype.postMethod = function() {
    const schema = {
        EventCategory: Joi.string().required(),
        EventName: Joi.string().required(),
        EventDate: Joi.string().required(),
        EventTimeStart: Joi.any(),
        EventTimeEnd: Joi.any(),
        EventPlace: Joi.string().required()
    };
    return schema;
};

EventJoiSchema.prototype.putMethod = function() {
    const schema = {
        EventID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

EventJoiSchema.prototype.deleteMethod = function() {
    const schema = {
        EventID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

module.exports = { EventJoiSchema };