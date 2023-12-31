import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldComponent } from './components/world/world.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RickComponent } from './components/rick/rick.component';

const routes: Routes = [
  {
    path: 'world',
    component: WorldComponent
  },
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: 'rick',
    component: RickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
