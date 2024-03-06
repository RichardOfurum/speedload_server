import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(@InjectModel('Product') private productModel: Model<Product>) { }

  async create(createProductDto: CreateProductDto) {
    const createProduct = new this.productModel(createProductDto);

    if (!createProduct) {
      throw new HttpException('Please check your data and try again', HttpStatus.CONFLICT)
    }

    if (!await createProduct.save()) {
      throw new HttpException('Record not saved please check your payload and try again', HttpStatus.BAD_REQUEST)
    }

    return createProduct;
  }

  async findAll(page: number, limit: number = 10) {
    const skip = (page - 1) * limit;
    const productData = await this.productModel.find().skip(skip).limit(limit).exec();

    if (!productData || productData.length == 0) {
      throw new NotFoundException('No record fund')
    }

    return productData;
  }

  async findOne(id: string) {
    const existingProduct = await this.productModel.findById(id).exec();
    if (!existingProduct) {
      throw new NotFoundException(`Product id #${id} not found`)
      ;
    }
    return existingProduct;
  }

  async findByLocation(location: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    const productData = await this.productModel.find({ location }).skip(skip).limit(limit).exec();

    if (!productData || productData.length == 0) {
      throw new NotFoundException('No record fund')
    }

    return productData;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const existingProduct = await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true });

    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    const product = await this.findOne(existingProduct.id);
    if (!product) {
      throw new NotFoundException(`Product id #${id} not found`);
    }

    return product;
  }

  async remove(id: string) {
    const deletedPrduct = await this.productModel.findByIdAndDelete(id);
    if (!deletedPrduct) {
      throw new NotFoundException(`Product id #${id} not found`)
    }
    return deletedPrduct;
  }

}
