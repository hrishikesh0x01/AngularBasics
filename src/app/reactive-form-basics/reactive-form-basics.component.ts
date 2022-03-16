import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-basics',
  templateUrl: './reactive-form-basics.component.html',
  styleUrls: ['./reactive-form-basics.component.scss']
})
export class ReactiveFormBasicsComponent implements OnInit {
  demoForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.demoForm = this.createContactForm();
  }

  ngOnInit(): void {
    this.jsArrays();
  }

  createContactForm(): FormGroup {
    return this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.maxLength(150), Validators.minLength(20)]],
      mobile: ['', [Validators.required, Validators.pattern(/\([0-9]{3}\)\-[0-9]{3}\-[0-9]{4}$/)]],
      age: ['',]
    });
  }

  onSelectionChange(event: Event) {
    if ((event.target as HTMLInputElement).value == '0') {
      // Removes single or multiple synchronous validators
      this.demoForm.controls['fullName'].removeValidators(Validators.required);
      this.demoForm.controls['fullName'].updateValueAndValidity();
      console.log(this.getControls['fullName']);
      // Removes all synchronous validators
      // this.demoForm.controls['fullName'].clearValidators();
      // this.demoForm.controls['fullName'].updateValueAndValidity();
    } else {
      // sets new validators kind of replaces the current ones
      // this.demoForm.controls['fullName'].setValidators(Validators.required);

      // adds new validators does not affect other validators.
      this.demoForm.controls['fullName'].addValidators(Validators.required);
      this.demoForm.controls['fullName'].updateValueAndValidity();
      console.log(this.demoForm);
    }
  }

  showData() {
    this.submitted = true;
    console.log(this.demoForm);
  }

  onReset() {
    this.demoForm.reset();
    this.submitted = false;
  }

  get getControls() {
    return this.demoForm.controls;
  }


  jsArrays() {
    let arr = [
      {
        name: "Hrishi",
        gender: "Male",
        company: "1Rivet"
      },
      {
        name: "Jigar",
        gender: "Male",
        company: "1Rivet"
      },
      {
        name: "Chirag",
        gender: "Male",
        company: "1Rivet"
      },
      {
        name: "Abhi Abhi shake",
        gender: "Male",
        company: "1Rivet"
      },
      {
        name: "Nirali",
        gender: "Female",
        company: "1Rivet"
      },
      {
        name: "Viral",
        gender: "Male",
        company: "1Rivet"
      },
      {
        name: "Himani",
        gender: "Female",
        company: "1Rivet"
      },
      {
        name: "Shreya",
        gender: "Female",
        company: "1Rivet"
      },
      {
        name: "Sneha",
        gender: "Female",
        company: "1Rivet"
      },
    ];

    let arr2 = [
      {
        name: "Om",
        gender: "Male",
        company: "1Rivet"
      },
      {
        name: "Pooja",
        gender: "Female",
        company: "1Rivet"
      },
      {
        name: "Dharmit",
        gender: "Male",
        company: "1Rivet"
      },
      {
        name: "Satvik",
        gender: "Male",
        company: "Logix"
      }
    ]

    // Concatenates arr2 with arr and returns a new Array.
    console.log("Concatenating 2 arrays:- ", arr.concat(arr2));

    // Copies elements within an array (in-place, no extra memory used) MODIFIES ORIGINAL Array
    arr.copyWithin(2, 3, 5);
    console.log(arr);

    // Returns an Array Iterator of key, value pair (i.e. index, value pair)
    // As it is an Iterator cannot print it directly, we need to iterate (loop) over it.
    for (let ivPair of arr2.entries()) {
      console.log(ivPair)
    }

    const isFrom1Rivet = (person: { company: string; }) => person.company === "1Rivet";
    const isNotFrom1Rivet = (person: { company: string; }) => person.company != "1Rivet";
    // Returns true only if the function passed returns true for all values in the Array.
    console.log("Array with all people from 1Rivet:- ", arr.every(isFrom1Rivet));
    console.log("Array with one person from other company:- ", arr2.every(isFrom1Rivet));

    // Returns true if atleast one or more elements satisfies the condition.
    console.log("Array with all people from 1Rivet:- ", arr.some(isNotFrom1Rivet));
    console.log("Array with one person from other company:- ", arr2.some(isNotFrom1Rivet));

    let tens = [1, 3243, 53, 3423, 423, 423, 423, 423];
    // fills an array with passed value. MODIFIES ORIGINAL Array
    tens.fill(10);
    console.log(tens);

    const isMale = (person: { gender: string; }) => person.gender === "Male";
    const isFemale = (person: { gender: string; }) => person.gender === "Female";
    // Returns an Array with only the elements where the given condition is met.
    console.log(arr.filter(isMale));

    // Returns the first element where the given condition is met.
    console.log(arr.find(isFemale));

    // Returns the index of the first element where the given condition is met.
    console.log(arr.findIndex(isMale));

    let nestedArr = [
      1,
      [
        234,
        [
          [333],
          4
        ]
      ],
      234,
      [
        6,
        234
      ],
      234
    ];

    // Returns a flat array is there is nesting within array. (Takes a parameter depth.)
    // So if 3 is passed as depth then array is flattened upto 3 levels.
    // But keeps the nesting beyond that depth
    // default value is 1
    console.log(nestedArr.flat(1));

    // Calls a defined callback function on each element of an array.
    // Then, flattens the result into a new array. Same effect as a map followed by flat with depth 1.
    console.log(nestedArr.flatMap((e) => e));

    // Iterates over all elements of Array. Best practice is to only use the array
    // elements and not make changes to the Array itself.
    arr2.forEach((person) => console.log(person.name));

    // Makes array from an array like object.
    console.log(Array.from("hello"));

    // Returns true if the array contains an element else returns false.
    console.log("When element is present in array:- ", nestedArr.includes(234));
    console.log("When element is not present in array:- ", nestedArr.includes(2354));

    // Returns the index of the first occurrence of the passed element
    // if element is not there then returns -1.
    console.log(nestedArr.indexOf(234));

    // same as indexOf but returns the index of last occurrence of the element
    console.log(nestedArr.lastIndexOf(234));

    // Checks if passed value is an Array
    console.log("For array passed in argument:- ", Array.isArray([1, 2, 3, 4]));
    console.log("For object passed in argument:- ", Array.isArray({ 0: 1, 1: 2 }));

    // Joins the string representation of all the elements
    // in arr in one string separated by delimeter passed in as argument. (',' is default)
    console.log([3, 43, 423, 434, 234, 343, 432].join(" - "));

    // Returns an Array Iterator of keys (i.e. index)
    // As it is an Iterator cannot print it directly, we need to iterate (loop) over it.
    for (let key of arr2.keys()) {
      console.log(key);
    }

    // Applies a transformation on all elements of Array and returns a new Array.
    console.log(arr.map((person) => {
      return { ...person, gender: Number(person.gender === "Male") };
    }));

    // Creates an array from passed in elements.
    console.log(Array.of(1, 5, 8, 98));

    // Removes and returns the last element from array. MODIFIES ORIGINAL Array
    console.log(arr2.pop());

    // Inserts an element at the end of an array. MODIFIES ORIGINAL Array
    arr2.push({
      name: "Veer",
      gender: "Male",
      company: "Jemistry"
    });
    console.log(arr2);

    let nums = [1, 213, 23, 123234, 234, 56];
    // It reduces the array to a single value by applying a user-supplied reducer.
    // It takes the reducer and an accumulator (with initial value).
    console.log(nums.reduce((acc, num) => acc + num, ''));

    // Same as reduce except it does it in reverse order of the array elements.
    console.log(nums.reduceRight((acc, num) => acc + num, ''));

    // Reverses an Array in-place (no extra memory used) MODIFIES ORIGINAL Array
    console.log(arr2.reverse());

    // Removes the first element of array. MODIFIES ORIGINAL Array
    console.log(nestedArr.shift());

    // Adds one or more elements to the start of Array
    // returns the new length of the array. MODIFIES ORIGINAL Array
    console.log(nestedArr.unshift(2454, 567, 45));
    console.log(nestedArr);

    // Returns an array of elements from the start index to the end index. DOES NOT REMOVE FROM ORIGINAL
    // It EXcludes the element at end index
    console.log(nums.slice(1, 3));
    console.log(nums);

    // Same as slice but removes the elements from original array. MODIFIES ORIGINAL Array
    // It INcludes the element at end index
    console.log(nums.splice(1, 3));
    console.log(nums);

    nums = [32, 53, 534, 534, 534, 5, 345, 345, 2435, 34, 5];
    // Sorts an array in-place. MODIFIES ORIGINAL Array
    // by default sorts in ascending order of the string representaion of the elements.
    console.log("Default sort:- ", nums.sort());
    // a comparator can also be passed.
    console.log("Based on comparator:- ", nums.sort((a, b) => a <= b ? (a == b ? 0 : -1) : 1));

    // Converts all elements to corresponding string representation all of which are seperated by comma.
    console.log(nums.toString());
    // same as toString but based on locale.
    console.log(nums.toLocaleString());

    // Returns an Iterator for the values of an array
    for (const person of arr2.values()) {
      console.log(person);
    }
  }
}
