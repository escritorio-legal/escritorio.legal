import { PrismaService } from 'src/prisma/PrismaService';
import Profile from 'src/profile/entities/profile.entity';
import User from 'src/user/entities/user.entity';
import { CreateLawfirmDto } from './dto/create-lawfirm.dto';
import { UpdateLawfirmDto } from './dto/update-lawfirm.dto';
import LawFirm from './entities/lawfirm.entity';
export declare class LawfirmService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createLawfirmDto: CreateLawfirmDto): {
        user: User;
        lawFirm: LawFirm;
        profiles: Profile[];
    };
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLawfirmDto: UpdateLawfirmDto): string;
    remove(id: number): string;
}
