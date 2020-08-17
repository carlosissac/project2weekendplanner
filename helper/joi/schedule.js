const Joi = require('joi');

const ScheduleJoiSchema = function() {
    this.ID = 'ScheduleJoiSchema';
};

ScheduleJoiSchema.prototype.getID = function() {
    return this.type;
};

ScheduleJoiSchema.prototype.getSingleScheduleMethod = function() {
    const schema = {
        ScheduleID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

ScheduleJoiSchema.prototype.postScheduleMethod = function() {
    const schema = {
        UserID: Joi.string().required(),
        EventID: Joi.string().required(),
        ScheduleNote: Joi.string().required()
    };
    return schema;
};

ScheduleJoiSchema.prototype.putScheduleMethod = function() {
    const schema = {
        ScheduleID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

ScheduleJoiSchema.prototype.deleteScheduleMethod = function() {
    const schema = {
        ScheduleID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

module.exports = { ScheduleJoiSchema };