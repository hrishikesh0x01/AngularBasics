export class Mentor {
    id: number;
    private _fname: string;
    lname: string;
    emailId: string;
    mobile: string;
    gender: number;
    empdate: string;
    dept: number;
    designation: number;

    constructor(
        id: number,
        fname: string,
        lname: string,
        emailId: string,
        mobile: string,
        gender: number,
        empdate: string,
        dept: number,
        designation: number
    ) {
        this.id = id;
        this._fname = fname;
        this.lname = lname;
        this.emailId = emailId;
        this.mobile = mobile;
        this.gender = gender;
        this.empdate = empdate;
        this.dept = dept;
        this.designation = designation;
    }
    get fname(): string {
        return this.fname;
    }
}