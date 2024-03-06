import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback } from './entities/feedback.entity';


@Injectable()
export class FeedbackService {

  constructor(@InjectModel('Feedback') private feedbackModel: Model<Feedback>) { }

  async create(createFeedbackDto: CreateFeedbackDto) {



    const createFeedback = new this.feedbackModel(createFeedbackDto);

    if (!createFeedback) {
      throw new HttpException('Please check your data and try again', HttpStatus.CONFLICT)
    }

    if (!await createFeedback.save()) {
      throw new HttpException('Record not saved please check your payload and try again', HttpStatus.BAD_REQUEST)
    }

    return createFeedback;


  }

  async findAll(page: number, limit: number = 10) {
    const skip = (page - 1) * limit;

    const feedbackData = await this.feedbackModel.find().skip(skip).limit(limit).exec();

    if (!feedbackData || feedbackData.length == 0) {
      throw new NotFoundException('No record found');
    }
    return feedbackData;
  }

  async findOne(id: string) {
    const existingFeedBack = await this.feedbackModel.findById(id).exec();
    if (!existingFeedBack) {
      throw new NotFoundException(`Feedback #${id} not found`)
      ;
    }
    return existingFeedBack;
  }


  async remove(id: string) {
    const deletedFeedback = await this.feedbackModel.findByIdAndDelete(id);
    if (!deletedFeedback) {
      throw new NotFoundException(`Feedback #${id} not found`)
    }
    return deletedFeedback;
  }
}
