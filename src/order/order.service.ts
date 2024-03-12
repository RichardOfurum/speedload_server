import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private orderModel: Model<Order>) { }

  async create(createOrderDto: CreateOrderDto) {
    const createOrder = new this.orderModel(createOrderDto);

    if (!createOrder) {
      throw new HttpException('Please check your data and try again', HttpStatus.CONFLICT)
    }

    if (!await createOrder.save()) {
      throw new HttpException('Record not saved please check your payload and try again', HttpStatus.BAD_REQUEST)
    }

    return createOrder;
  }

  async findAll(page: number, limit: number = 10) {
    const skip = (page - 1) * limit;
    const orderData = await this.orderModel.find().skip(skip).limit(limit).exec();

    if (!orderData || orderData.length == 0) {
      throw new NotFoundException('No record fund')
    }

    return orderData;
  }

  async findBySellerId(page: number, limit: number = 10, seller_id: string) {
    const skip = (page - 1) * limit;
    const orderData = await this.orderModel.find({ seller_id }).skip(skip).limit(limit).exec();

    if (!orderData || orderData.length == 0) {
      throw new NotFoundException('No record fund')
    }

    return orderData;
  }


  async findByBuyerId(page: number = 1, limit: number = 10, buyer_id: string) {
    const skip = (page - 1) * limit;
    const orderData = await this.orderModel.find({ buyer_id }).skip(skip).limit(limit).exec();

    if (!orderData || orderData.length === 0) {
      throw new NotFoundException('No record found');
    }

    return orderData;
  }

  async findByBuyerEmail(page: number, limit: number = 10, buyer_email: string) {
    const skip = (page - 1) * limit;
    const orderData = await this.orderModel.find({ buyer_email }).skip(skip).limit(limit).exec();

    if (!orderData || orderData.length == 0) {
      throw new NotFoundException('No record found')
    }

    return orderData;
  }

  async findByLocation(page: number, limit: number = 10, location: string,) {
    const skip = (page - 1) * limit;
    const orderData = await this.orderModel.find({ location }).skip(skip).limit(limit).exec();

    if (!orderData || orderData.length == 0) {
      throw new NotFoundException('No record found')
    }

    return orderData;

  }

  async findOne(id: string) {
    const existingOrder = await this.orderModel.findById(id).exec();
    if (!existingOrder) {
      throw new NotFoundException(`order id #${id} not found`)
      ;
    }
    return existingOrder;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const existingOrder = await this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true });

    if (!existingOrder) {
      throw new NotFoundException('order not found');
    }

    return existingOrder;
  }

  async remove(id: string) {
    const deletedOrder = await this.orderModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      throw new NotFoundException(`order id #${id} not found`)
    }
    return deletedOrder;
  }
}

