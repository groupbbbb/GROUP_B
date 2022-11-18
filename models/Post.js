// const Post = function(Sequelize, DataTypes){
//     const model = Sequelize.define(
//         'post',
//         {
//             id:{
//                 type : DataTypes.INTEGER,
//                 allowNull : false,
//                 primaryKey : true,
//                 autoIncrement : true,
//             },
//             user_id:{
//                 type: DataTypes.INTEGER,
//                 allowNull : false,
//             },
//             content:{
//                 type : DataTypes.STRING(5000),
//                 allowNull : false,
//             },
//             date:{
//                 type: DataTypes.DATEONLY,
//                 allowNull : false,
//             },
//             img:{
//                 type : DataTypes.BLOB,
//                 allowNull : true,
//             }
//         },
//         {
//             tableName : 'post',
//             freezeTableName : true,
//             timestamps : false, 
//         },
//     );
//     return model;
// };



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
                img:{
                    type : DataTypes.BLOB,
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