import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    InputMaskModule,
    InputGroupModule,
    InputGroupAddonModule,
    MessageModule,
    MessagesModule,
    ToolbarModule,
    DividerModule,
    PanelModule,
    ListboxModule
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    InputMaskModule,
    InputGroupModule,
    InputGroupAddonModule,
    MessageModule,
    MessagesModule,
    ToolbarModule,
    DividerModule,
    PanelModule,
    ListboxModule
  ],
  providers: [],
})
export class PrimeNgModule { }
