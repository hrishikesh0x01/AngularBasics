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
}

// Defines properties for the experience details to be stored in the resume.
class ExperienceInfo {
    companyName: string;
    jobRole: string;
    jobDescription: string;
    startYear: number;
    endYear: number;
}

// Defines properties for the education details to be stored in the resume.
class EducationInfo {
    uniName: string;
    degree: string;
    grade: number;
}