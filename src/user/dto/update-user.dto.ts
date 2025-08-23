import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) { }
// PartialType CreateUserDto dan UpdateUserDtoga xamma propertilani ob otib ixtiyoriy qib qoyadi