const Post = function(Sequelize, DataTypes){
        const model = Sequelize.define(
            'post',
            {
                id:{
                    type : DataTypes.INTEGER,
                    allowNull : false,
                    primaryKey : true,
                    autoIncrement : true,
                },
                user_id:{
                    type: DataTypes.INTEGER,
                    allowNull : false,
                },
                content:{
                    type : DataTypes.STRING(5000),
                    allowNull : false,
                },
                img_src:{
                    type : DataTypes.STRING(500),
                    allowNull : true,
                },
                
            },
            {
                tableName : 'post',
                freezeTableName : true,
                timestamps : true,
                createdAt: "createdAt",
                updatedAt: 'updatedAt',
            },
        );
        return model;
    };

module.exports = Post;