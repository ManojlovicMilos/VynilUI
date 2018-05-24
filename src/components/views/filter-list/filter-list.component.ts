import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vinyl-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit
{
    @Input() list:any[];
    @Input() guide:any;
    public constructor()
    {

    }
    public ngOnInit()
    {
        
    }
}
