interface Teacher {
firstName: string;
lastName: string;
fullTimeEmployee: boolean;
yearsOfExperience?: number;
location: string;
[key: string]: any; // allows for adding any attribute to the object
}
