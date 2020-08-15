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
        EventName: Joi.string().required(),
        EventPlace:  Joi.string().required(),
        EventType: Joi.string().required(),
        EventOrganizer: Joi.string().required(),
        EventTimeStart: Joi.date().required(),
        EventTimeEnd: Joi.date().required()
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