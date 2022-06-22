import { Component, OnInit } from '@angular/core';
import { BackOfficeService } from 'src/app/back-office-module/back-office-services/backoffice-service.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-ui-add-agent',
  templateUrl: './ui-add-agent.component.html',
  styleUrls: ['./ui-add-agent.component.css'],
})
export class UiAddAgentComponent implements OnInit {
  constructor(private backoffice: BackOfficeService) {}
  Agents: any;
  pageSlice: any;
  lenght: any;
  ngOnInit(): void {
    this.backoffice.getAgents().subscribe(
      (res) => {
        this.Agents = res;
        console.log(res);

        this.pageSlice = this.Agents.slice(0, 3);
        this.lenght = this.Agents.length;
      },
      (err: any) => {
        console.log(err.error);
      }
    );
  }
  OnPageChange(event: PageEvent) {
    const start = event.pageIndex * event.pageSize;
    let end = start + event.pageSize;
    if (end > this.Agents.length) {
      end = this.Agents.length;
    }
    this.pageSlice = this.Agents.slice(start, end);
  }
  search($event: any) {
    this.backoffice.getsearchAgents($event).subscribe(
      (res: any) => {
        this.Agents = res;

        this.pageSlice = this.Agents.slice(0, 3);
        this.lenght = this.Agents.length;
      },
      (err: any) => {
        console.log(err.error);
      }
    );
  }
}
