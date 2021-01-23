const { Model } = require('sequelize');

export class AuthorModel extends Model{
    id: number;
    name: string
}