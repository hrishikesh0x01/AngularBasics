import { Injectable } from "@angular/core";

///////////////////////////////////////////////////////
import { Adapter } from "./adapter.interface";

export class Mentor {
    id: number;
    fname: string;
    lname: string;
    email: string;
    mobile: string;
    gender: number;
    empdate: string;
    department: number;
    designation: number;

    constructor(
        fname: string,
        lname: string,
        email: string,
        mobile: string,
        gender: number,
        empdate: string,
        department: number,
        designation: number,
        id: number,
    ) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.mobile = mobile;
        this.gender = gender;
        this.empdate = empdate;
        this.department = department;
        this.designation = designation;
    }

    public get name() {
        return this.fname + ' ' + this.lname;
    }

    public static comparator(property: keyof Mentor, isReverse: number): any {
        return (a: Mentor, b: Mentor) => isReverse * (a[property] < b[property] ? -1 : (a[property] === b[property] ? 0 : 1));
    }
}

@Injectable({
    providedIn: "root",
})
export class MentorAdapter implements Adapter<Mentor> {
    adapt(item: any): Mentor {
        return new Mentor(
            item.fname,
            item.lname,
            item.email,
            item.mobile,
            item.gender,
            item.empdate,
            item.department,
            item.designation,
            item.id,
        );
    }
}
