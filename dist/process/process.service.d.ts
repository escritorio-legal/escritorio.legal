import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';
export declare class ProcessService {
    create(createProcessDto: CreateProcessDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProcessDto: UpdateProcessDto): string;
    remove(id: number): string;
}
