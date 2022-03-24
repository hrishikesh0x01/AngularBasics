export class FilterForm {
    designations: boolean[];
    departments: boolean[];
    gender: number;
    searchBy: SearchBy;

    constructor(
        designations: boolean[],
        departments: boolean[],
        gender: number,
        searchBy: SearchBy,
    ) {
        this.designations = designations;
        this.departments = departments;
        this.gender = gender;
        this.searchBy = searchBy;
    }
}

export class SearchBy {
    name: string;
    email: string;
    mobile: string;

    constructor(
        name: string,
        email: string,
        mobile: string
    ) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }
}