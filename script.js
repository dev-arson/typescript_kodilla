{
    var persons_1 = [];
    function addPerson(firstName, lastName) {
        var name = firstName + lastName;
        persons_1.push(name);
    }
    var firstName = 'John';
    var lastName = 'Doe';
    var age = 18;
    var person = {
        firstName: firstName,
        lastName: lastName
    };
    addPerson(person.firstName, person.lastName);
    addPerson('Amanda', 'Doe');
    addPerson('Thomas', 'Jefferson');
}
