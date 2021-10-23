const Employee = require('../lib/Employee');

test('Can we create a new Employee instance', ()=>{
    expect(typeof(new Employee())).toBe('object');
});

test('Does the first position of the new employee save a name', ()=>{
    const name = "Israel"
    const emp = new Employee(name)
    expect(emp.name).toBe(name);
})

test('Does the second position of the new employee save and id', ()=>{
    const id = "24"
    const emp = new Employee('test', id)
    expect(emp.id).toBe(id);
})

test('Does the third position of the new employee save and email', ()=>{
    const email = "israelm.riosjr@gmail.com"
    const emp = new Employee('test', 'test', email)
    expect(emp.email).toBe(email);
})
