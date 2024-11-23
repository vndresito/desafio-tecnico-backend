import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'correo@gmail.com',
    description: 'Correo electrónico del usuario registrado',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'Contraseña asociada a la cuenta del usuario',
  })
  @IsNotEmpty()
  password: string;
}
