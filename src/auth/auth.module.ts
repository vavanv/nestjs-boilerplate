import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from '../tokens/passport_strategy';
import { environment } from 'src/environment';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      session: true,
      defaultStrategy: 'jwt',
      property: 'user',
    }),
    JwtModule.register({ secret: environment.jwt_secret }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, PassportModule, JwtModule],
})
export class AuthModule {}
