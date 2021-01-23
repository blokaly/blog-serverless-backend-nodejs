import {Body, Controller, Delete, Get, Path, Post, Put, Route, Tags} from "tsoa";
import {AuthorDto} from "../dto/AuthorDto";
import {AuthorService} from "../service/AuthorService";
import {AuthorConverter} from "../converter/AuthorConverter";


@Tags('Author')
@Route('author')
export class AuthorController extends Controller {

    @Get('{id}')
    public async getAuthor(
        @Path() id: string,
    ): Promise<AuthorDto> {
        return AuthorConverter.toDto(
            await AuthorService.getAuthorById(id)
        );
    }

    @Get('')
    public async listAuthors(): Promise<AuthorDto[]> {
        return AuthorConverter.toDtoList(
            await AuthorService.listAuthors()
        );
    }

    @Post('')
    public async saveAuthor(
        @Body() book: AuthorDto,
    ) {
        await AuthorService.saveAuthor(
            AuthorConverter.toModel(book)
        );

        return {
            status: "Author inserted"
        }
    }

    @Put('')
    public async updateAuthor(
        @Body() book: AuthorDto
    ) {
        await AuthorService.updateAuthor(
            AuthorConverter.toModel(book)
        );

        return {
            status: "Author updated"
        }
    }

    @Delete('{id}')
    public async deleteAuthor(
        @Path() id: string
    ) {
        await AuthorService.deleteAuthor(id);

        return {
            status: "Author deleted"
        }

    }
}