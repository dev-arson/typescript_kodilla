{
  const persons: string[] = [];

  function addPerson(firstName: string, lastName: string): void {
    const name: string = firstName + lastName;
    persons.push(name);
  }

  let firstName: string = 'John';
  let lastName: string = 'Doe';
  let age: number = 18;

  const person: {
    firstName: string;
    lastName: string;
  } = {
    firstName,
    lastName
  }

  addPerson(person.firstName, person.lastName);
  addPerson('Amanda', 'Doe');
  addPerson('Thomas', 'Jefferson');
}
