import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsersTableComponent } from "./components/usersTable/usersTable.component";
import { UsersService } from "./services/users.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [UsersTableComponent],
    exports: [UsersTableComponent],
    providers: [UsersService]
})
export class UsersTableModule {}