import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {

    }

    async signIn(user: any) {
        const payload = { sub: user.userId, email: user.email, isSeller: user.isSeller };
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
