import { Component, OnInit } from '@angular/core';
import { TestDataService } from 'src/app/share/services/test-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor( private testData: TestDataService) { }

  public ngOnInit(): void {
    this.testData.getProject().subscribe(data=>{
      console.log('data',data);

    })
  }

}
