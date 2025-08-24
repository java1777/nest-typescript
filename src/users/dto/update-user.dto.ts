import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { options } from 'axios';

export class UpdateUserDto extends PartialType(CreateUserDto) { };

// PartialType options qiberadi yani xoxlasa yozadi xoxlamasa yozmidi!
