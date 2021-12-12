import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@google.com', description: 'User email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;
  @ApiProperty({ example: '123456', description: 'Password' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Not less than 4, and not more than 16' })
  readonly password: string;
}
