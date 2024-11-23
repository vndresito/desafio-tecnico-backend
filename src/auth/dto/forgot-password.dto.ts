import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ForgotPasswordDto {
  @ApiProperty({
    example: 'correo@gmail.com',
    description: 'Correo electrónico asociado a la cuenta del usuario',
  })
  @IsEmail()
  email: string;
}
