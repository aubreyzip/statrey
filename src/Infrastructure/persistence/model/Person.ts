import IPerson from "@/core/model/IPerson";

class Person implements IPerson{
    id: string;

    constructor(dto:IPerson) {
        this.id = dto.id;
    }
}

export default Person;