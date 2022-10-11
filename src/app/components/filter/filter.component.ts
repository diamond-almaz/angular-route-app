import { CdkAccordion, CdkAccordionItem } from '@angular/cdk/accordion';
import { AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements AfterViewInit {

  @ViewChild('accordionItem') accordionItem!: CdkAccordionItem;

  @Input() searchProducts!: (searchText: string) => void;

  @Input() defaultValue!: BehaviorSubject<string>;

  search = new FormControl('')
  constructor() { }
  ngAfterViewInit(): void {
    this.accordionItem.open()
    this.defaultValue.subscribe((newValue) => {
      this.search.setValue(newValue)
    })
  }


  ngOnInit(): void {

  }
  
  onSearch() {
    this.searchProducts(this.search.value as string)
  }

  onClear() {
    this.searchProducts('');
  }

}
