export class Employee {
    id: number;
    fname: string;
    lname: string;
    emailId: string;
    mobile: string;
    gender: string;
    empdate: string;
    dept: number;

    constructor(
        id: number,
        fname: string,
        lname: string,
        emailId: string,
        mobile: string,
        gender: string,
        empdate: string,
        dept: number
    ) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.emailId = emailId;
        this.mobile = mobile;
        this.gender = gender;
        this.empdate = empdate;
        this.dept = dept;
    }
}