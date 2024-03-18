import {Router} from 'express'
import { ProudctController } from '../controller/productController'
import { ProductInteractor } from '../interactor/productInteractor'
import { ProductRepository } from '../reopository/productRepository'

const productRouter = Router({ strict: true, caseSensitive: false, mergeParams: true })
const interactor = new ProductInteractor()
const ripository = new ProductRepository(interactor)
const product = new ProudctController(ripository)


productRouter.get('/getProduct' , product.onGetProduct.bind(product))
             .post('createProduct' , product.onCreateProduct)
             .patch('/updateProduct' , product.onUpdateProduct)
             .get('/getBrandmodel' , product.onGetBrandModel)

export default productRouter