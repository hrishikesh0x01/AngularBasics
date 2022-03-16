// Defines the properties to be stored for a resume.
export class ResumeInfo {
    id: number;
    name: string;
    designation: string;
    email: string;
    mobileNo: string;
    technical: string[];
    experience: ExperienceInfo[];
    education: EducationInfo[];

    constructor(
        id: number,
        name: string,
        designation: string,
        email: string,
        mobileNo: string,
        technical: string[],
        experience: ExperienceInfo[],
        education: EducationInfo[],
    ) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.email = email;
        this.mobileNo = mobileNo;
        this.technical = technical;
        this.experience = experience;
        this.education = education;
    }
}

// Defines properties for the experience details to be stored in the resume.
class ExperienceInfo {
    companyName: string;
    jobRole: string;
    jobDescription: string;
    startYear: number;
    endYear: number;

    constructor(
        companyName: string,
        jobRole: string,
        jobDescription: string,
        startYear: number,
        endYear: number,
    ) {
        this.companyName = companyName;
        this.jobRole = jobRole;
        this.jobDescription = jobDescription;
        this.startYear = startYear;
        this.endYear = endYear;
    }
}

// Defines properties for the education details to be stored in the resume.
class EducationInfo {
    uniName: string;
    degree: string;
    grade: number;

    constructor(
        uniName: string,
        degree: string,
        grade: number,
    ) {
        this.uniName = uniName;
        this.degree = degree;
        this.grade = grade;
    }
}