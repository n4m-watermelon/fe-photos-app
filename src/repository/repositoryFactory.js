
import LoginRepository from './loginRepository'
import ImagesRepository from './imagesRepository'

const repositories = {
    login :LoginRepository,  
    images: ImagesRepository
}
 const repositoryFactory ={
    get: name => repositories[name]
}


export default repositoryFactory