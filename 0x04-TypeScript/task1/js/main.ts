interface Teacher {
firstName: string;
lastName: string;
fullTimeEmployee: boolean;
yearsOfExperience?: number;
location: string;
[key: string]: any; // allows for adding any attribute to the object
}

interface Directors extends Teacher {
  numberOfReports: number;
}
from typing import Tuple
def printTeacherFunction(firstName: str, lastName: str) -> str:
  def printTeacher(firstName, lastName):
    return f"{firstName[0]}. {lastName}"
  return printTeacher(firstName, lastName)


def StudentClassConstructor(firstName: str, lastName: str) -> Type['StudentClass']:
  def __init__(self, firstName: str, lastName: str):
    self.firstName = firstName
    self.lastName = lastName
  return __init__

class StudentClass:
  def __init__(self, firstName: str, lastName: str):
    self.firstName = firstName
    self.lastName = lastName

  def workOnHomework(self) -> str:
    return "Currently working"

  def displayName(self) -> str:
    return self.firstName
