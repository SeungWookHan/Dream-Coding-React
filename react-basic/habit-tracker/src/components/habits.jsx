import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

export default class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              // 이 부분은 onDelete={(habit) => {this.props.handleDelete(habit)}} 으로도 표현 가능
            />
          ))}
        </ul>
      </>
    );
  }
}
