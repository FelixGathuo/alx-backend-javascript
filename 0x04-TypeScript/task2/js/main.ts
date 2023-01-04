from typing import Type, Union

def DirectorInterface(cls: Type) -> Type:
  """Interface for the Director"""
  def workFromHome(self) -> str:
    """Method that returns a string"""
    pass

  def getCoffeeBreak(self) -> str:
    """Method that returns a string"""
    pass

  def workDirectorTasks(self) -> str:
    """Method that returns a string"""
    pass
  cls.workFromHome = workFromHome
  cls.getCoffeeBreak = getCoffeeBreak
  cls.workDirectorTasks = workDirectorTasks
  return cls

def TeacherInterface(cls: Type) -> Type:
  """Interface for the Teacher"""
  def workFromHome(self) -> str:
    """Method that returns a string"""
    pass

  def getCoffeeBreak(self) -> str:
    """Method that returns a string"""
    pass

  def workTeacherTasks(self) -> str:
    """Method that returns a string"""
    pass
  cls.workFromHome = workFromHome
  cls.getCoffeeBreak = getCoffeeBreak
  cls.workTeacherTasks = workTeacherTasks
  return cls

@DirectorInterface
class Director:
  def workFromHome(self) -> str:
    return "Working from home"

  def getCoffeeBreak(self) -> str:
    return "Getting a coffee break"

  def workDirectorTasks(self) -> str:
    return "Getting to director tasks"

@TeacherInterface
class Teacher:
  def workFromHome(self) -> str:
    return "Cannot work from home"

  def getCoffeeBreak(self) -> str:
    return "Cannot have a break"

  def workTeacherTasks(self) -> str:
    return "Getting to work"

def createEmployee(salary: Union[int, str])
def isDirector(employee):
  return isinstance(employee, Director)
def executeWork(employee):
  if isinstance(employee, Director):
    return employee.workDirectorTasks()
  else:
    return employee.workTeacherTasks()

type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    throw new Error('Invalid subject');
  }
}
