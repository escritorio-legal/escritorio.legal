import { ProcessService } from './process.service';
import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';
export declare class ProcessController {
    private readonly processService;
    constructor(processService: ProcessService);
    create(createProcessDto: CreateProcessDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProcessDto: UpdateProcessDto): string;
    remove(id: string): string;
}
