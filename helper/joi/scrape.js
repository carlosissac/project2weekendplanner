const Joi = require('joi');

const ScrapeJoiSchema = function() {
    this.ID = 'ScrapeJoiSchema';
};

ScrapeJoiSchema.prototype.getID = function() {
    return this.type;
};

ScrapeJoiSchema.prototype.putPLIndexMethod = function() {
    const schema = {
        PLIndex: Joi.string().trim().regex(/^[0-9]+$/).required()
    };
    return schema;
};

module.exports = { ScrapeJoiSchema };