import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Protected') // Grupo en Swagger
@ApiBearerAuth() // Indica que requiere JWT
@UseGuards(JwtAuthGuard)
@Controller('protected')
export class ProtectedController {
  @Get()
  getProtectedData() {
    return { message: 'Esta es una ruta protegida.' };
  }
}
