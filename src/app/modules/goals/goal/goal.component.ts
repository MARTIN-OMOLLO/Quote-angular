import { Component, OnInit } from '@angular/core';
import {Goal} from '/home/martin/Documents/Quotes/src/app/goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  private readonly newProperty = 'Watch finding Nemo';
  
  goals: Goal[] = [
    {id:1, name:this.newProperty,description:'Find an online version and watch merlin find his son'},
    {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
    {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
    {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
    {id:5,name:'Solve math homework',description:'Damn Math'},
    {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
function Input() {
  throw new Error('Function not implemented.');
}

