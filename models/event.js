module.exports = (sequelize, DataTypes) => {
    var Event = sequelize.define('Event', {
        EventID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            onDelete: 'cascade'
        },
        EventName: {
            type: DataTypes.STRING(254),
            allowNull: false,
        },
        EventPlace: {
            type: DataTypes.STRING(254),
            allowNull: false
        },
        EventType: {
            type: DataTypes.STRING(35),
            allowNull: false
        },
        EventOrganizer: {
            type: DataTypes.STRING(35),
            allowNull: false
        },
        EventTimeStart: {
            type: DataTypes.DATE,
            allowNull: false
        },
        EventTimeEnd: {
            type: DataTypes.DATE,
            allowNull: false
        },
        EventCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        }
    }, {
        timestamps: false
    });
    return Event;
};
