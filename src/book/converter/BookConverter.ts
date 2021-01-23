import {BookDto} from "../dto/BookDto";
import {BookModel} from "../model/BookModel";


export class BookConverter{
    static toDto(val: BookModel): BookDto {
        return {
            id: val.id,
            title: val.title,
            author: val.author
        };
    }

    static toDtoList(val: BookModel[]): BookDto[] {
        return val.map(element =>  {
            return {
                id: element.id,
                title: element.title,
                author: element.author
            }
        });
    }

    static toModel(val: BookDto): BookModel {
        return {
            id: val.id,
            title: val.title,
            author: val.author
        };
    }
}