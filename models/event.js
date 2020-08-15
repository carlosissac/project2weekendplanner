module.exports = (sequelize, DataTypes) => {
    var Event = sequelize.define('Event', {
        EventID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        EventCategory: {
            type: DataTypes.STRING(254),
            allowNull: false,
        },
        EventName: {
            type: DataTypes.STRING(254),
            allowNull: false
        },
        EventDate: {
            type: DataTypes.STRING(254),
            allowNull: false
        },
        EventTimeStart: {
            type: DataTypes.STRING(35),
            allowNull: true
        },
        EventTimeEnd: {
            type: DataTypes.STRING(254),
            allowNull: true
        },
        EventPlace: {
            type: DataTypes.STRING(254),
            allowNull: true
        },
        EventCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        }
    }, {
        timestamps: false
    });

    Event.associate = models => {
        Event.hasMany(models.Schedule, {
            onDelete: 'CASCADE',
            foreignKey: {
                name: 'EventID',
                allowNull: false
            },
            hooks: true
        });
    };

    return Event;
};
