import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ItemModel} from 'src/app/models/item.model';

@Component({
  selector: 'app-items-dialog',
  templateUrl: './items-dialog.component.html',
  styleUrls: ['./items-dialog.component.css']
})
export class ItemsDialogComponent implements OnInit {
  items: ItemModel[];

  constructor( @Inject(MAT_DIALOG_DATA) public dialogData) {
    this.items = this.dialogData.items;
  }

  ngOnInit() {
  }

}


