import {AuthorModel} from "../model/AuthorModel";

export class AuthorService{
    public static async saveAuthor(author: AuthorModel){
        try {
            await AuthorModel.create({
                id: author.id,
                name: author.name
            });

        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }


    public static async updateAuthor(author: AuthorModel){
        try{
            await AuthorModel.update({
                name: author.name
            },{
                where: {
                    id: author.id
                }
            });

        }catch (error){
            console.error(error.name);
            throw error;
        }
    }

    public static async getAuthorById(authorId: string): Promise<AuthorModel>{
        try{
            const resp =  await AuthorModel.findByPk(authorId);

            if (typeof resp !== 'undefined' && resp !== null){
                return resp;
            }else{

                throw new Error(`Author ${authorId} not found`);
            }

        }catch (error){
            console.error(error.name);
            throw error;
        }
    }

    public static async listAuthors(): Promise<AuthorModel[]>{
        try{

            return await AuthorModel.findAll();

        }catch (error){
            console.error(error.name);
            throw error;
        }
    }

    public static async deleteAuthor(authorId: string){
        try{
            const deletedRows = await AuthorModel.destroy({
                where: {
                    id: authorId
                }
            });

            console.log(`deleted ${deletedRows} rows`);
            if (deletedRows === 0){
                throw new Error(`Author ${authorId} not found`);
            }

        }catch (error) {
            console.error(error);
            throw error
        }
    }
}