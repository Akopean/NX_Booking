import { Injectable } from '@nestjs/common';
import { PrismaService } from '@booking/api/data-access-db';
import * as bcrypt from 'bcrypt';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
  DeleteOneUserArgs,
} from '@booking/api/generated-db-types';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOneUserArgs: CreateOneUserArgs) {
    console.log(createOneUserArgs);
    const { data } = createOneUserArgs;
    const saltOrRounds = 10;

    const hashPassword = await bcrypt.hash(data.password, saltOrRounds);

    return this.prisma.user.create({
      data: { ...data, password: hashPassword },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(findUniqueUserArgs: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(findUniqueUserArgs);
  }

  update(updateOneUserArgs: UpdateOneUserArgs) {
    return this.prisma.user.update(updateOneUserArgs);
  }

  remove(deleteOneUserArgs: DeleteOneUserArgs) {
    return this.prisma.user.delete(deleteOneUserArgs);
  }
}
