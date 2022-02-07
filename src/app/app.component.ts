import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//npm install --save bootstrap jquery font-awesome
//npm install --save json-server concurrently
//npm install --save @ngrx/store
//npm install --save @ngrx/effects
//npm install --save @ngrx/store-devtools => store-devtools est un outil qui nous permet de surveiller tout ce que se passe sur ngrx et affiche tout les details, les stats,les actions et tout ce qui se passe au niveau de ngrx
/*git branch
git branch decomposition1
git checkout decomposition1
git add .
git commit -m "decomposition1"
git push -u origin decomposition1*/
export class AppComponent {
  title = 'ngrxx';
}
