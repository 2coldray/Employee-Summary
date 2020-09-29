const employee = (role, ids) => [
  {
    type: "input",
    message: role + "'s name?",
    name: "name",
  },
  {
    type: "input",
    message: role + "'s id?",
    name: "id",
    validate: (val) => !ids.includes(val),
  },
  {
    type: "input",
    message: role + "'s email?",
    name: "email",
  },
];

module.exports = {
  engineer: (ids) => [
    ...employee("Engineer", ids),
    {
      type: "input",
      name: "github",
      message: "Engineer's github?",
    },
  ],
  manager: (ids) => [
    ...employee("Manager", ids),
    {
      type: "input",
      name: "officeNumber",
      message: "Manager's officeNumber?",
    },
  ],
  intern: (ids) => [
    ...employee("Intern", ids),
    {
      type: "input",
      name: "school",
      message: "Intern's school?",
    },
  ],
  continue: {
    type: "list",
    name: "choice",
    message: "continue?",
    choices: ["engineer", "intern", "exit"],
  },
};
