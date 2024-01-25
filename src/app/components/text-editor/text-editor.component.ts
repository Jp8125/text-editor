import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [NgxEditorModule,FormsModule,ReactiveFormsModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent implements OnInit,OnDestroy{
constructor(private fb:FormBuilder){}
editor:Editor={} as Editor
tools:Toolbar=[
  ['bold', 'italic'],
  ['underline', 'strike'],
  ['code', 'blockquote'],
  ['ordered_list', 'bullet_list'],
  [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  ['link', 'image'],
  ['text_color', 'background_color'],
  ['align_left', 'align_center', 'align_right', 'align_justify'],
]
form:FormGroup=this.fb.group({
  editorContent:['',Validators.required()]
})
  ngOnInit(): void {
  this.editor=new Editor()
}
  ngOnDestroy(): void {
  this.editor.destroy()
}

}
