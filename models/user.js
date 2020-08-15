module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        UserID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        /*UserName: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        UserEmail: {
            type: DataTypes.STRING(35),
            allowNull: false
            //unique: true
        },*/
        UserNickname: {
            type: DataTypes.STRING(35),
            allowNull: false
            //unique: true
        },
        UserCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('now')
        }
    }, {
        timestamps: false
    });

    User.associate = models => {
        User.hasMany(models.Schedule, {
            onDelete: 'CASCADE',
            foreignKey: {
                name: 'UserID',
                allowNull: false
            },
            hooks: true
        });
    };

    return User;
};