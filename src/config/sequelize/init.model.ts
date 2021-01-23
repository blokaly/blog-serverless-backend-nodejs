import {BookModel} from "../../book/model/BookModel";
import {AuthorModel} from "../../book/model/AuthorModel";
const {DataTypes } = require('sequelize');

export function InitModel(sequelize){
    BookModel.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: DataTypes.TEXT,
        author: DataTypes.TEXT
    }, {
        tableName: 'book',
        createdAt: false,
        updatedAt: false,
        sequelize, // We need to pass the connection instance
    });

    AuthorModel.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.TEXT
    }, {
        tableName: 'author',
        createdAt: false,
        updatedAt: false,
        sequelize, // We need to pass the connection instance
    });

}