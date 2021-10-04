import { LawfirmService } from './lawfirm.service';
import { CreateLawfirmDto } from './dto/create-lawfirm.dto';
import { UpdateLawfirmDto } from './dto/update-lawfirm.dto';
export declare class LawfirmController {
    private readonly lawfirmService;
    constructor(lawfirmService: LawfirmService);
    create(createLawfirmDto: CreateLawfirmDto): {
        user: import("../user/entities/user.entity").default;
        lawFirm: import("./entities/lawfirm.entity").default;
        profiles: import("../profile/entities/profile.entity").default[];
    };
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLawfirmDto: UpdateLawfirmDto): string;
    remove(id: string): string;
}
