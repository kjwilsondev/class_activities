# Test Resourceful Routes
## Intro to Automated Testing

---

### Objectives

- list various types of automated tests
- Define a test runner and an assertion library
- Implement route tests for one resource
- List when its ok to test and when its not

### Why Automated Testing?

- Catch errors - unforeseen or foreseen
- More efficient than manual testing
- Saves time down the road - regression tests
- Save code quality

### How Coding Works in a Job

- user story
- build
- test
- production

---

### Types of Tests

- **Models**     -> *Unit testing*
    - [Unit Testing](https://www.telerik.com/products/mocking/unit-testing.aspx "Haven't Read Yet")
- **Views**      -> *UI Testing*
- **Controller** -> *Routes Testing*
    - testing Routes is the best practice

#### Test Runner
- **Mocha**
- javascript test framework running on node
- [Mocha and Chai JS](https://www.youtube.com/watch?v=1MLof2r-q3o "Haven't Watched Yet")

#### Assertion Library
- Chai: assertion library for node
- should
- expect
- assert

#### Mocking
- *"Process used in unit testing when the unit being tested has external dependencies"*
- *"The purpose is to focus on the code being tested and not on the behavior or state of external dependencies"*
- Fake object that simulates external object to test code
- Sinon - mock library

#### Continuous Integration (CI)
- *Development practice that requires developers to integrate code into a shared repository*
- Much like a gate on Github, code will not be pushed without passing CI tests
