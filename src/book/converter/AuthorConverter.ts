import {AuthorDto} from "../dto/AuthorDto";
import {AuthorModel} from "../model/AuthorModel";


export class AuthorConverter{
    static toDto(val: AuthorModel): AuthorDto {
        return {
            id: val.id,
            name: val.name
        };
    }

    static toDtoList(val: AuthorModel[]): AuthorDto[] {
        return val.map(element =>  {
            return {
                id: element.id,
                name: element.name
            }
        });
    }

    static toModel(val: AuthorDto): AuthorModel {
        return {
            id: val.id,
            name: val.name
        };
    }
}