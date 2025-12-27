import { Routes } from '@angular/router';
import { LettersList } from './menu/letterslist/letterslist';
import { ToyFactory } from './menu/toy-factory/toy-factory';
import { Legal } from './menu/legal/legal';
import { Disconnect } from './menu/disconnect/disconnect';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'delivery',
        pathMatch: 'full',
    },
    {
        path: 'delivery',
        component: LettersList
    },
    {
        path: 'toysfactory',
        component: ToyFactory
    },
    {
        path: 'legal',
        component: Legal
    },
    {
        path: 'disconnect',
        component: Disconnect
    }

];
