import LawFirm from 'src/law-firm/entities/law-firm.entity';
export default class Profile {
    name: string;
    lawFirm: LawFirm;
    constructor(name: string, lawFirm: LawFirm);
}
