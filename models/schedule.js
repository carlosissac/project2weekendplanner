module.exports = (sequelize, DataTypes) => {
    var Schedule = sequelize.define('Schedule', {
        ScheduleID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        ScheduleNote: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        ScheduleOutdated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        ScheduleCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        }
    }, {
        timestamps: false
    });

    Schedule.associate = models => {
        Schedule.belongsTo(models.User, {
            onDelete: 'CASCADE',
            foreignKey: {
                name: 'UserID',
                allowNull: false
            },
            hooks: true
        });
        Schedule.belongsTo(models.Event, {
            onDelete: 'CASCADE',
            name: 'EventID',
            foreignKey: {
                name: 'EventID',
                allowNull: false
            },
            hooks: true
        });
    };

    return Schedule;
};