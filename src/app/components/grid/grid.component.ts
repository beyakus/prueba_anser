import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  headers: string[] = [
    '#',
    '',
    'Task name',
    'In charge',
    'Depends on',
    'Depends on',
    'Start date',
    'End date',
  ];
  data = [
    {
      value: {
        id: 1,
        status: 'active',
        taskname: 'name',
        change: ['CM', 'VB', 'ADL'],
        depends: ['1', '2', '3'],
        duration: '5 Days',
        startDate: '20/12/2019',
        endDate: '20/12/2019',
      },
      children: [
        {
          id: 2,
          status: 'success',
          taskname: 'chilndren',
          change: ['CM', 'VB', 'ADL'],
          depends: ['1', '2', '3'],
          duration: '5 Days',
          startDate: '20/12/2019',
          endDate: '20/12/2019',
        },
        {
          id: 3,
          status: 'success',
          taskname: 'chilndren 2',
          change: ['CM', 'VB', 'ADL'],
          depends: ['1', '2', '3'],
          duration: '5 Days',
          startDate: '20/12/2019',
          endDate: '20/12/2019',
        },
      ],
      view: false,
    },
    {
      value: {
        id: 4,
        status: 'block',
        taskname: 'name 2',
        change: ['CM', 'VB', 'ADL'],
        depends: ['1', '2', '3'],
        duration: '5 Days',
        startDate: '20/12/2019',
        endDate: '20/12/2019',
      },
      children: [
        {
          id: 13,
          status: 'pending',
          taskname: 'nuevo',
          change: ['CM', 'VB', 'ADL'],
          depends: ['1', '2', '3'],
          duration: '5 Days',
          startDate: '20/12/2019',
          endDate: '20/12/2019',
        },
        {
          id: 13,
          status: 'pending',
          taskname: 'nuevo',
          change: ['CM', 'VB', 'ADL'],
          depends: ['1', '2', '3'],
          duration: '5 Days',
          startDate: '20/12/2019',
          endDate: '20/12/2019',
        },
        {
          id: 13,
          status: 'pending',
          taskname: 'nuevo',
          change: ['CM', 'VB', 'ADL'],
          depends: ['1', '2', '3'],
          duration: '5 Days',
          startDate: '20/12/2019',
          endDate: '20/12/2019',
        },
      ],
      view: false,
    },
    {
      value: {
        id: 5,
        status: 'success',
        taskname: 'name 2',
        change: ['CM', 'VB', 'ADL'],
        depends: ['1', '2', '3'],
        duration: '5 Days',
        startDate: '20/12/2019',
        endDate: '20/12/2019',
      },
      children: [],
      view: false,
    },
    {
      value: {
        id: 6,
        status: 'success',
        taskname: 'daniel',
        change: ['CM', 'VB', 'ADL'],
        depends: ['1', '2', '3'],
        duration: '5 Days',
        startDate: '20/12/2019',
        endDate: '20/12/2019',
      },
      children: [
        {
          id: 7,
          status: 'success',
          taskname: 'subchil',
          change: ['CM', 'VB', 'ADL'],
          depends: ['1', '2', '3'],
          duration: '5 Days',
          startDate: '20/12/2019',
          endDate: '20/12/2019',
        },
      ],
      view: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
