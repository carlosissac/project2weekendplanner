const Joi = require('joi');

const ScheduleJoiSchema = function() {
    this.ID = 'ScheduleJoiSchema';
};

ScheduleJoiSchema.prototype.getID = function() {
    return this.type;
};

ScheduleJoiSchema.prototype.getSingleMethod = function() {
    const schema = {
        ScheduleID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

ScheduleJoiSchema.prototype.postMethod = function() {
    const schema = {
        ScheduleNote: Joi.string().required(),
        ScheduleOutdated:  Joi.string().required()
    };
    return schema;
};

ScheduleJoiSchema.prototype.putMethod = function() {
    const schema = {
        ScheduleID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

ScheduleJoiSchema.prototype.deleteMethod = function() {
    const schema = {
        ScheduleID: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

module.exports = { ScheduleJoiSchema };