{
  enum Role {
    Admin = 1,
    Moderator,
    User
  }

  type Person = {
    id: number | string;
    firstName: string,
    lastName: string,
    role: Role,
  }

  const JohnDoe: Person = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    role: 1
  }

  const AmandaDoe: Person = {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    role: 2
  }

  const ThomasJefferson: Person = {
    id: 'rwe5345sfst3453543',
    firstName: 'John',
    lastName: 'Doe',
    role: 3
  }

  const names: string[] = [JohnDoe.firstName, AmandaDoe.firstName, ThomasJefferson.firstName];
  const JohnDoeSummary: [string, string, Role] = [JohnDoe.firstName, JohnDoe.lastName, JohnDoe.role];
}
