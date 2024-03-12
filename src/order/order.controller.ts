import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ) {
    // return "richard";
    return this.orderService.findAll(page, limit);
  }

  @Get('/seller_orders')
  findBySellerId(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('seller_id',) seller_id: string,
  ) {
    return this.orderService.findBySellerId(page, limit, seller_id);
  }

  @Get('/buyer_orders')
  findByBuyerId(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('buyer_id',) buyer_id: string,
  ) {
    if (!buyer_id) {
      throw new NotFoundException('No record found');
    }
    return this.orderService.findByBuyerId(page, limit, buyer_id);
  }

  @Get('/buyer_orders_by_email')
  findByBuyerEmail(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('buyer_email',) buyer_email: string,
  ) {
    return this.orderService.findByBuyerEmail(page, limit, buyer_email);
  }


  @Get('/location')
  findByLocation(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('location',) location: string,
  ) {
    return this.orderService.findByLocation(page, limit, location)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
