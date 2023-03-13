const { faker } = require('@faker-js/faker');
const _ = require('lodash');

module.exports = function () {
  // Define column names
  const COLUMN_NAMES = ['To Do', 'In Progress', 'Review', 'Test', 'Done'];

  // Crate 10 fake tasks.
  const tasks = _.times(10, function () {
    return {
      id: faker.mersenne.rand(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      assignee: _.times(faker.mersenne.rand(3, 0), function () {
        return {
          id: faker.datatype.uuid(),
          name: faker.name.fullName(),
          avatar: faker.internet.avatar(),
        };
      }),
      labels: _.times(faker.mersenne.rand(5, 0), function () {
        return {
          id: faker.datatype.uuid(),
          title: faker.word.noun(faker.mersenne.rand(8, 4)),
          color: faker.color.hsl({ format: 'css' }),
        };
      }),
    };
  });

  // Create columns array.
  const columns = COLUMN_NAMES.map(function (title) {
    return {
      id: faker.datatype.uuid(),
      title,
      tasks: [],
    };
  });

  // Loop over the tasks and add them to a random column.
  tasks.forEach((task) => {
    const randomColumnIndex = Math.floor(Math.random() * columns.length);
    columns[randomColumnIndex].tasks.push(task.id);
  });

  return {
    columns,
    tasks,
  };
};
