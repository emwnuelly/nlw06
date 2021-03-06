import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"



class ListTagService{

        async execute(){
            const tagRepository = getCustomRepository(TagsRepositories);
            const tags = await tagRepository.find();

            return classToPlain(tags);
        }

}

export { ListTagService }