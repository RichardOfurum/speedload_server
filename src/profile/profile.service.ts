import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Model } from 'mongoose';
import { Profile } from './entities/profile.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProfileService {

  constructor(@InjectModel('Profile') private profileModel: Model<Profile>) { }

  async create(createProfileDto: CreateProfileDto) {

    const { user_id } = createProfileDto;
    const profile = await this.profileModel.findOne({ user_id });

    if (profile) {
      throw new HttpException('Profile already exist', HttpStatus.BAD_REQUEST);
    } else {

      const createProfile = new this.profileModel(createProfileDto);

      if (!createProfile) {
        throw new HttpException('Please check your data and try again', HttpStatus.CONFLICT)
      }

      if (!await createProfile.save()) {
        throw new HttpException('Record not saved please check your payload and try again', HttpStatus.BAD_REQUEST)
      }

      return createProfile;
    }

  }

  async findAll(page: number, limit: number = 10) {
    const skip = (page - 1) * limit;

    const profileData = await this.profileModel.find().skip(skip).limit(limit).exec();

    if (!profileData || profileData.length == 0) {
      throw new NotFoundException('No record found');
    }
    return profileData;
  }


  async findOne(id: string) {
    const existingProfile = await this.profileModel.findById(id).exec();
    if (!existingProfile) {
      throw new NotFoundException(`Profile #${id} not found`)
      ;
    }
    return existingProfile;
  }

  async findByUserId(userId: string) {

    const existingProfile = await this.profileModel.findOne({ userId });
    if (!existingProfile) {
      throw new NotFoundException(`User profile not found`)
      ;
    }
    return existingProfile;
  }

  async findByUserEmail(email: string) {

    const existingProfile = await this.profileModel.findOne({ email });
    if (!existingProfile) {
      throw new NotFoundException(`User profile not found`)
      ;
    }
    return existingProfile;
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    const existingProfile = await this.profileModel.findByIdAndUpdate(id, updateProfileDto, { new: true });

    if (!existingProfile) {
      throw new NotFoundException('Profile not found');
    }

    const profile = await this.findOne(existingProfile.id);
    if (!profile) {
      throw new NotFoundException(`Profile id #${id} not found`);
    }

    return profile;
  }

  async remove(id: string) {
    const deletedProfile = await this.profileModel.findByIdAndDelete(id);
    if (!deletedProfile) {
      throw new NotFoundException(`Profile #${id} not found`)
    }
    return deletedProfile;
  }
}
