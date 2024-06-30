import {Component, signal} from '@angular/core';
import {NgForOf} from "@angular/common";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = "Labs Page";
  tasks = signal([
    "Create a project",
    "Create components",
    "Create routes"
  ]);
  disabled = true;
  person = {
    avatar: {
      name: "Ho oh",
      img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/250.png"
    },
    name: signal("Alex"),
    lastName: signal("Beltran"),
    disabled: signal(false)
  }

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData.get("name"));
    console.log(formData.get("lastName"));
  }

  handleDoubleClick() {
    console.log("Clicked two times!");
  }

  handleChangeName(e : Event) {
    const { value } = e.target as HTMLFormElement;
    const { name, disabled} = this.person;

    name.set(value);

    this._handleEmptyValues();
  }

  handleChangeLastName(e : Event) {
    const { value } = e.target as HTMLFormElement;
    const { lastName, disabled } = this.person;

    lastName.set(value);

    this._handleEmptyValues();
  }

  handleKeydown(e : Event) {
    const { value } = e.target as HTMLFormElement;
    console.log(value);
  }

  _handleEmptyValues() : void {
    const { name, lastName, disabled} = this.person;
    (name() === "" || lastName() === "") ? disabled.set(true) : disabled.set(false);
  }
}
