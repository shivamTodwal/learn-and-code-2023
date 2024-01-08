class Employee {

  constructor(id, firstName, lastName, department, availableLeaves) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.department = department;
      this.availableLeaves = availableLeaves;
  }

  requestLeave(leaveType, startDate, endDate, reason) {
      if (this.availableLeaves < endDate - startDate + 1) {
          throw new Error("Insufficient leaves");
      }

      this.availableLeaves -= endDate - startDate + 1;

      const leave = new Leave(this.id, leaveType, startDate, endDate, reason);
      const approval = Project.askForApproval(leave);

      leave.status = approval ? "pending" : "rejected";

      return leave;
  }

}

class Project {
  constructor(id, name, deadline, employeeIds, manager) {
      this.id = id;
      this.name = name;
      this.deadline = deadline;
      this.employeeIds = employeeIds;
      this.manager = manager
  }

  static askForApproval(leave) {
    return true;
  }

}

class Leave {
  constructor(employeeId, leaveType, startDate, endDate, reason) {
      this.employeeId = employeeId;
      this.leaveType = leaveType;
      this.startDate = startDate;
      this.endDate = endDate;
      this.status = "pending";
      this.reason = reason;
  }

  changeStatus(newStatus) {
      this.status = newStatus;
  }

}

const employee = new Employee(123, "Shivam", "Todwal", "Software Development", 20);

const leaveType = "Casual";
const startDate = new Date("2023-12-15");
const endDate = new Date("2023-12-18");
const reason = "Rishikesh Trip with Team";

const leaveRequest = employee.requestLeave(leaveType, startDate, endDate, reason);