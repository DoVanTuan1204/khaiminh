import { Component, OnInit } from '@angular/core';
import { TestDataService } from 'src/app/share/services/test-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor( private testData: TestDataService) { }
  dataProject : any
  public ngOnInit(): void {
    this.testData.getProject().subscribe(Response=>{
      this.dataProject= Response
      console.log('data project :',this.dataProject);
      // console.log('id project :',this.dataProject.data[0]._id);
      this.dataProject.data.forEach((item:any) => {
        this.testData.idProjectDelete = item._id
        console.log(this.testData.idProjectDelete);

      })


    })
  }
    allowDeleting() {
      alert("aaaa")
    }


}
