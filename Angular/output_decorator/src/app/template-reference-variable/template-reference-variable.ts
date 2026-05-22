import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  imports: [],
  templateUrl: './template-reference-variable.html',
  styleUrl: './template-reference-variable.css'
})
export class TemplateReferenceVariable {

data = "this is demo component communication"
demo()
{
  return "hello"
}
}
